import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import Joi from "joi";
import { toast } from "react-toastify";
import _ from "lodash";

import { CForm, CButton, CImage, CFormSwitch, CCallout } from "@coreui/react";

import api, { registerAccessToken } from "src/api";
import { accessToken } from "src/store";
import {
  saveImg,
  getImageFromBucket,
  convertTZ,
  getUpdatedDataOnly,
  addDataToFormData,
} from "../../utils/function";

import {
  CustomCFormInputGroup,
  CustomCFormFilesGroup,
  CustomCFormSelectGroup
} from "src/components/common/CustomCInputGroup";
import { Modal } from "src/components";

/**
 * View and update leader data
 */
const LeaderPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const locationData = useLocation().state;

  const [fetchedData, setFetchedData] = useState(locationData);
  const [formData, setFormData] = useState(locationData);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const [imageViews, setImageViews] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Fetch data from server
  useEffect(() => {
  }, []);

  // Joi schema
  const schema = Joi.object({
    name: Joi.string().optional().label("Name"),
    position: Joi.string().optional().label("Position"),
    contactNo: Joi.date().optional().label("Contact Number"),
    image: Joi.any(),
  });

  /*
   * Handling Button Presses
   */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      // To display images in the form
      let imageUrls = [];
      console.log(e.target);
      let url = URL.createObjectURL(files[0]);
      imageUrls.push(url);
      setFormData({
        ...formData,
        [name]: files,
      });
      setImageViews(imageUrls);
    } else {
      delete formErrors[name];
      // Set order according to the position
      if (name == "position") {
        switch (value) {
          case "Hon. President":
            setFormData({ ...formData, [name]: value, order: 1 });
            break;
          case "Hon. General Secretary":
            setFormData({ ...formData, [name]: value, order: 2 });
            break;
          case "Hon. Treasurer":
            setFormData({ ...formData, [name]: value, order: 3 });
            break;
        }
      } else {
        setFormData({ ...formData, [name]: value });
      }
    }
  };

  const handleSubmit = async (e) => {
    if (readOnly) return;
    const updateData = _.pick(formData, ["name", "position", "image", "contactNo"]);
    const { error, value } = schema.validate(updateData, {
      abortEarly: false,
    });
    if (!error) {
      e.preventDefault();
      if (!registerAccessToken(accessToken(), history, dispatch)) return;
      const res = await api.leader.update(
        locationData.leaderId,
        addDataToFormData(updateData)
      );
      if (res.status == 200) {
        toast.success("Leader updated successfully");
        history.replace("/office/leader/view-all");
      } else {
        toast.error(
          res.message ? res.message : "Error occurred. Please try again later."
        );
      }
      return;
    } else {
      const errors = {};
      for (let item of error.details) {
        errors[item.path[0]] = item.message;
      }
      setFormErrors(errors);
    }
  };

  // Handle delete
  const handleDelete = async (e) => {
    if (readOnly) return;

    e.preventDefault();
    if (!registerAccessToken(accessToken(), history, dispatch)) return;
    const res = await api.leader.delete(locationData.leaderId);
    if (res.status == 200) {
      toast.success("Leader deleted successfully");
      history.replace("/office/leader/view-all");
    } else {
      toast.error(
        res.message ? res.message : "Error occurred. Please try again later."
      );
    }
  };

  return (
    <>
      <div className="shadow border-b border-gray-200 sm:rounded-lg bg-white p-4 mb-5 row g-3">
        <div className="grid justify-end">
          <CFormSwitch
            //   size="xl"
            label="Enable Update Mode"
            id="formSwitchCheckDefault"
            checked={!readOnly}
            onChange={() => {
              setReadOnly(!readOnly);
              setFormData(fetchedData);
            }}
          />
        </div>

        <CForm className="mx-2 row g-3">
          <Modal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            successCallback={handleDelete}
            successLabel="Remove"
            title="Remove Event"
            body="Are you sure you want to remove?"
          />
          {CustomCFormInputGroup({
            label: "Name",
            name: "name",
            value: formData.name,
            onChange: handleChange,
            error: formErrors.name,
            uppercase: true,
            required: false,
            readOnly: readOnly,
          })}
          {CustomCFormSelectGroup({
            label: "Position",
            name: "position",
            value: formData.position,
            onChange: handleChange,
            error: formErrors.position,
            uppercase: true,
            required: false,
            readOnly: readOnly,
            options: [
              { value: "Hon. President", label: "Hon. President" },
              {
                value: "Hon. General Secretary",
                label: "Hon. General Secretary",
              },
              { value: "Hon. Treasurer", label: "Hon. Treasurer" },
            ],
            mdSize: '6',
          })}
          {CustomCFormInputGroup({
            label: "Contact Number",
            name: "contactNo",
            value: formData.contactNo,
            onChange: handleChange,
            error: formErrors.contactNo,
            uppercase: true,
            required: false,
            readOnly: readOnly,
          })}
          <CCallout color="danger">
            If you upload new images, all the previously uploaded images will be
            removed. Therefore, please download all the old images before
            uploading new ones if you are planning to use old ones in future.
          </CCallout>
          {!readOnly ? (
            <div>
              <CustomCFormFilesGroup
                label="Image"
                name="image"
                onChange={handleChange}
                error={formErrors.images}
                type="file"
                required={false}
                multiple={false}
              />
              <div>
                <div className="mb-3 grid grid-cols-2 md:grid-cols-3 align-middle justify-start">
                  {imageViews?.map((image, index) => (
                    <div key={index} className="flex-row p-2">
                      <CImage
                        key={index}
                        className="align-middle"
                        rounded
                        // thumbnail
                        src={image}
                        width={200}
                        height={200}
                        align="center"
                      />{" "}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-3 grid grid-cols-2 md:grid-cols-3 align-middle justify-start">
                <div className="flex-row p-2">
                  <CImage
                    className="align-middle"
                    rounded
                    // thumbnail
                    src={getImageFromBucket(formData.image)}
                    width={200}
                    height={200}
                    align="center"
                  />{" "}
                </div>

                {/* <iframe src={formData.images[0]}></iframe> */}
              </div>
              {formData.image && (
                <div className="mb-3 flex">
                  <CButton
                    className="mt-2"
                    color="success"
                    variant="outline"
                    onClick={() => saveImg(formData.image)}
                  >
                    {" "}
                    Download Image
                  </CButton>
                </div>
              )}
            </div>
          )}

          {!readOnly && (
            <div className="flex flex-row justify-end">
              <div className="justify-end">
                <CButton
                  color="primary"
                  variant="outline"
                  className="mr-2"
                  onClick={handleSubmit}
                >
                  Update
                </CButton>
              </div>
              <div className="justify-end">
                <CButton
                  color="danger"
                  variant="outline"
                  className="mr-2"
                  onClick={() => setModalVisible(true)}
                >
                  Remove
                </CButton>
              </div>
            </div>
          )}
        </CForm>
      </div>
    </>
  );
};

export default LeaderPage;

const initialValue = {
  name: "",
  position: "",
  contactNo: "",
  image: "",
};
