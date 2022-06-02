import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import Joi from "joi";
import { toast } from "react-toastify";
import _ from "lodash";

import { CForm, CButton, CImage, CFormSwitch, CCallout } from "@coreui/react";

import api, { registerAccessToken } from "src/api";
import store, { accessToken } from "src/store";
import { saveImg, getImageFromBucket, convertTZ, getUpdatedDataOnly } from "../../utils/function";
import { image1, image2 } from "src/configs/constants";

import {
  CustomCFormInputGroup,
  CustomCFormFilesGroup,
} from "src/components/common/CustomCInputGroup";

const EventPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const eventId = useLocation().state.eventId;

  const [event, setEvent] = useState(initialValue);
  const [formData, setFormData] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [readOnly, setReadOnly] = useState(true);

  // Fetch data from server
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (!registerAccessToken(accessToken(), history, dispatch)) return;
      const res = await api.event.getByEventId(eventId);
      if (res.status != 200) {
        toast.error(
          res.message ? res.message : "Error occurred, please try again"
        );
      } else {
        setEvent(res.data);
        setFormData(res.data);
      }
      setLoading(false);
    };

    fetchData().catch((e) => console.log(e));
  }, []);

  // Joi schema
  const schema = Joi.object({
    title: Joi.string().optional().label("title"),
    description: Joi.string().optional().label("description"),
    date: Joi.date().optional().label("startDate"),
    images: Joi.array().optional().label("images"),
  });

  /*
   * Handling Button Presses
   */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData({ ...formData, [name]: files });
    } else {
      delete formErrors[name];
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    const updateFields = _.pick(formData, ['title', 'description', 'date', 'images']);
    const originalData = _.pick(event, ['title', 'description', 'date', 'images']);
    const updatedData = getUpdatedDataOnly(originalData, updateFields);

    const { error, value } = schema.validate(updatedData, { abortEarly: false });
    if (!error) {
      e.preventDefault();
      const res = await api.event.update(eventId, updatedData);
      if (res.status == 200) {
        toast.success("Issue status updated successfully");
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
              setFormData(event);
            }}
          />
        </div>
        <CForm className="mx-2 row g-3">
          {CustomCFormInputGroup({
            label: "Title",
            name: "title",
            value: formData.title,
            onChange: handleChange,
            error: formErrors.title,
            uppercase: true,
            required: false,
            readOnly: readOnly,
          })}
          {CustomCFormInputGroup({
            label: "Description",
            name: "description",
            value: formData.description,
            onChange: handleChange,
            error: formErrors.description,
            uppercase: true,
            required: false,
            readOnly: readOnly,
          })}
          {CustomCFormInputGroup({
            label: "Date",
            name: "date",
            value: readOnly
              ? formData.date
                ? convertTZ(formData.date)
                : ""
              : formData.date,
            onChange: handleChange,
            error: formErrors.date,
            uppercase: true,
            required: false,
            readOnly: readOnly,
            type: "date",
          })}
          <CCallout color="danger">
            If you upload new images, all the previously uploaded images will be
            removed. Therefore, please download all the old images before
            uploading new ones if you are planning to use old ones in future.
          </CCallout>
          {!readOnly ? (
            <CustomCFormFilesGroup
              label="Images"
              name="images"
              onChange={handleChange}
              error={formErrors.images}
              type="file"
              required={false}
            />
          ) : (
            <div>
              <div className="mb-3 grid grid-cols-2 md:grid-cols-3 align-middle justify-start">
                {formData?.images?.map((image, index) => (
                  <div key={index} className="flex-row p-2">
                    <CImage
                      key={index}
                      className="align-middle"
                      rounded
                      // thumbnail
                      src={getImageFromBucket(image)}
                      width={200}
                      height={200}
                      align="center"
                    />{" "}
                  </div>
                ))}
                {/* <iframe src={formData.images[0]}></iframe> */}
              </div>
              {formData.images?.length > 0 && (
                <div className="mb-3 flex">
                  <CButton
                    className="mt-2"
                    color="success"
                    variant="outline"
                    onClick={() => saveImg(formData.images)}
                  >
                    {" "}
                    Download Images
                  </CButton>
                </div>
              )}
            </div>
          )}

          <div className="grid justify-end">
            <CButton
              color="primary"
              variant="outline"
              className="mr-2"
              onClick={handleSubmit}
            >
              Update
            </CButton>
          </div>
        </CForm>
      </div>
    </>
  );
};

export default EventPage;

const initialValue = {
  title: "",
  description: "",
  date: "",
  images: [],
};
