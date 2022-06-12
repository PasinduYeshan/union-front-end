import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Joi from "joi";
import { toast } from "react-toastify";
import _ from "lodash";

import { CForm, CButton, CImage } from "@coreui/react";

import api, { registerAccessToken } from "src/api";
import store, { accessToken, selectors } from "src/store";

import { LoadingIndicator } from "src/components";
import {
  CustomCFormInputGroup,
  CustomCFormSelectGroup,
} from "src/components/common/CustomCInputGroup";

/**
 * Add leader to leader section in web page
 */
const AddBranchSecretaryPage = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialValue);
  const [imageViews, setImageViews] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [readOnly, setReadOnly] = useState(false);

  const branchNameOptions = useSelector(selectors.meta.selectBranchNameOptions);

  // Joi schema
  const schema = Joi.object({
    name: Joi.string().exist().label("Name"),
    branchName: Joi.string().exist().label("Branch Name"),
    contactNo: Joi.date().exist().label("Contact Number"),
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
      const res = await api.branchSecretary.add(formData);
      if (res.status == 200) {
        toast.success("Branch Secretary added successfully");
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
            label: "Branch Name",
            name: "branchName",
            value: formData.branchName,
            onChange: handleChange,
            error: formErrors.branchName,
            uppercase: true,
            required: false,
            readOnly: readOnly,
            options: branchNameOptions,
            mdSize: "6",
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
          <div className="grid justify-end">
            <CButton
              color="primary"
              variant="outline"
              className="mr-2"
              onClick={handleSubmit}
            >
              {loading ? LoadingIndicator("sm") : null}
              Add Branch Secretary
            </CButton>
          </div>
        </CForm>
      </div>
    </>
  );
};

export default AddBranchSecretaryPage;

const initialValue = {
  name: "",
  contactNo: "",
  branchName: "",
};
