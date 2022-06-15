import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Joi from "joi";
import { toast } from "react-toastify";
import _ from "lodash";

import { CForm, CButton, CImage } from "@coreui/react";

import api, { registerAccessToken } from "src/api";
import { accessToken } from "src/store";

import { LoadingIndicator } from "src/components";
import {
  CustomCFormInputGroup,
} from "src/components/common/CustomCInputGroup";

/**
 * Add secretary to secretary section
 */
const AddCommitteeMemberPage = () => {
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
    contactNo: Joi.string().exist().label("Contact Number"),
    order: Joi.number().exist().label("Contact Number"),
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
      setFormData({ ...formData, [name]: value });
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
      const res = await api.committeeMember.add(formData);
      if (res.status == 200) {
        toast.success("Committee member added successfully");
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
            label: "Position",
            name: "position",
            value: formData.position,
            onChange: handleChange,
            error: formErrors.position,
            uppercase: true,
            required: false,
            readOnly: readOnly,
          })}
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
          {CustomCFormInputGroup({
            label: "Contact Number",
            name: "contactNo",
            value: formData.contactNo,
            onChange: handleChange,
            error: formErrors.contactNo,
            uppercase: true,
            required: false,
            readOnly: readOnly,
            mdSize: "6",
          })}
          {CustomCFormInputGroup({
            label: "Display Order",
            name: "order",
            value: formData.order,
            onChange: handleChange,
            error: formErrors.order,
            uppercase: true,
            required: false,
            readOnly: readOnly,
            type: "number",
            mdSize: "6",
          })}
          <div className="grid justify-end">
            <CButton
              color="primary"
              variant="outline"
              className="mr-2"
              onClick={handleSubmit}
            >
              {loading ? LoadingIndicator("sm") : null}
              Add Committee Member
            </CButton>
          </div>
        </CForm>
      </div>
    </>
  );
};

export default AddCommitteeMemberPage;

const initialValue = {
  name: "",
  contactNo: "",
  position: "",
  order: "",
};
