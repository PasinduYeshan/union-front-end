import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Joi from "joi";
import { toast } from "react-toastify";
import _ from "lodash";

import { CForm, CButton, CImage } from "@coreui/react";

import api, { registerAccessToken } from "src/api";
import store, { accessToken } from "src/store";
import {
  getImageFromBucket,
  convertTZ,
  addDataToFormData,
} from "../../utils/function";

import { LoadingIndicator } from "src/components";
import {
  CustomCFormInputGroup,
  CustomCFormFilesGroup,
  CustomCFormTextAreaGroup,
  CustomCFormSelectGroup,
} from "src/components/common/CustomCInputGroup";

/**
 * Add leader to leader section in web page
 */
const AddLeaderPage = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialValue);
  const [imageViews, setImageViews] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [readOnly, setReadOnly] = useState(false);

  // Joi schema
  const schema = Joi.object({
    name: Joi.string().exist().label("Name"),
    position: Joi.string().exist().label("Position"),
    contactNo: Joi.date().exist().label("Contact Number"),
    image: Joi.any(),
    order: Joi.number().exist().label("Order"),
  });

  /*
   * Handling Button Presses
   */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      // To display images in the form
      let imageUrls = [];
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
    const { error, value } = schema.validate(formData, {
      abortEarly: false,
    });
    if (!error) {
      e.preventDefault();
      setLoading(true);
      if (!registerAccessToken(accessToken(), history, dispatch)) return;
      const res = await api.leader.add(addDataToFormData(formData));
      if (res.status == 200) {
        toast.success("Leader added successfully");
        setFormData(initialValue);
        setImageViews([]);
      } else {
        toast.error(
          res.message ? res.message : "Error occurred. Please try again later."
        );
      }
      setLoading(false);
      return;
    } else {
      const errors = {};
      for (let item of error.details) {
        errors[item.path[0]] = item.message;
      }
      setFormErrors(errors);
    }
  };
  return (
    <>
      <div className="shadow border-b border-gray-200 sm:rounded-lg bg-white p-4 mb-5 row g-3">
        <CForm className="mx-2 row g-3">
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
            mdSize: '6',
          })}
          <CustomCFormFilesGroup
            label="Image"
            name="image"
            onChange={handleChange}
            error={formErrors.image}
            type="file"
            required={false}
            mdSize="6"
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

          <div className="grid justify-end">
            <CButton
              color="primary"
              variant="outline"
              className="mr-2"
              onClick={handleSubmit}
            >
              {loading ? LoadingIndicator("sm") : null}
              Add Leader
            </CButton>
          </div>
        </CForm>
      </div>
    </>
  );
};

export default AddLeaderPage;

const initialValue = {
  name: "",
  position: "",
  contactNo: "",
  image: "",
  order: "",
};
