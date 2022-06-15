import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Joi from "joi";
import { toast } from "react-toastify";
import _ from "lodash";

import { CForm, CButton, CImage } from "@coreui/react";

import api, { registerAccessToken } from "src/api";
import { accessToken } from "src/store";
import {
  getImageFromBucket,
  convertTZ,
  addDataToFormData
} from "../../utils/function";

import { LoadingIndicator } from "src/components";
import {
  CustomCFormInputGroup,
  CustomCFormFilesGroup,
  CustomCFormTextAreaGroup,
} from "src/components/common/CustomCInputGroup";

const AddEventPage = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialValue);
  const [imageViews, setImageViews] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [readOnly, setReadOnly] = useState(false);

  // Joi schema
  const schema = Joi.object({
    title: Joi.string().exist().label("Title"),
    description: Joi.string().exist().label("Description"),
    date: Joi.date().exist().label("Date"),
    images: Joi.any(),
  });

  /*
   * Handling Button Presses
   */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      // To display images in the form
      let imageUrls = [];
      for (let i = 0; i < files.length; i++) {
        let url = URL.createObjectURL(files[i]);
        imageUrls.push(url);
      }
      setFormData({
        ...formData,
        [name]: files,
      });
      setImageViews(imageUrls);
    } else {
      delete formErrors[name];
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    const { error, value } = schema.validate(formData, { abortEarly: false });
    if (!error) {
      e.preventDefault();
      setLoading(true);
      if (!registerAccessToken(accessToken(), history, dispatch)) return;
      const res = await api.event.add(addDataToFormData(formData));
      if (res.status == 200) {
        toast.success("Event added successfully");
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
            label: "Title",
            name: "title",
            value: formData.title,
            onChange: handleChange,
            error: formErrors.title,
            uppercase: true,
            required: false,
            readOnly: readOnly,
          })}
          {CustomCFormTextAreaGroup({
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
            mdSize: "6",
          })}
          <CustomCFormFilesGroup
            label="Images"
            name="images"
            onChange={handleChange}
            error={formErrors.images}
            type="file"
            required={false}
            mdSize="6"
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
                    src={getImageFromBucket(image)}
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
              Add Event
            </CButton>
          </div>
        </CForm>
      </div>
    </>
  );
};

export default AddEventPage;

const initialValue = {
  title: "",
  description: "",
  date: "",
  images: [],
};
