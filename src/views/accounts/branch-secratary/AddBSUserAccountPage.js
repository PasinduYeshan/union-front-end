import React, { useState } from "react";
import { toast } from "react-toastify";
import Joi from "joi";

import {
  CustomCFormInputGroup,
  CustomCFormSelectGroup,
} from "src/components/common/CustomCInputGroup";

import { CButton } from "@coreui/react";

const AddBSUserAccountPage = () => {
  const [formData, setFormData] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});

  // Joi schema
  const schema = Joi.object({
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    contactNo: Joi.string().required().label("Contact Number"),
    NIC: Joi.string().required().label("NIC"),
    branchName: Joi.string().required().label("Branch Name"),
    accountType: Joi.string().required().label("Access Level"),
    confirmPassword: Joi.ref("password"),
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData({ ...formData, [name]: files });
    } else {
      delete formErrors[name];
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    const { error, value } = schema.validate(formData, { abortEarly: false });
    if (!error) {
      e.preventDefault();
      toast.success("Successfully Added");
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
      <div className="shadow sm:rounded-lg bg-white p-4 mb-5 row g-3">
        {/* <h1 className="text-xl font-semibold mb-3">Branch Ser</h1> */}
        <div className="row g-3">
          <CustomCFormInputGroup
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={formErrors.name}
            uppercase={true}
          />
          <CustomCFormInputGroup
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={formErrors.email}
            uppercase={true}
            mdSize={6}
          />
          <CustomCFormInputGroup
            label="Branch Name"
            name="branchName"
            value={formData.branchName}
            onChange={handleChange}
            error={formErrors.branchName}
            uppercase={true}
            mdSize={6}
          />
          <CustomCFormInputGroup
            label="NIC"
            name="NIC"
            value={formData.NIC}
            onChange={handleChange}
            error={formErrors.NIC}
            uppercase={true}
            mdSize={6}
          />
          <CustomCFormInputGroup
            label="Contact Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            error={formErrors.contactNumber}
            uppercase={true}
            mdSize={6}
          />
          <CustomCFormInputGroup
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            error={formErrors.username}
            uppercase={true}
            mdSize={6}
          />
          <CustomCFormSelectGroup
            label="Access Level"
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            error={formErrors.accountType}
            uppercase={true}
            mdSize={6}
            options={[
              { value: "bsEditor", label: "Editor" },
              { value: "bsViewer", label: "Viewer" },
            ]}
          />
          <CustomCFormInputGroup
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={formErrors.password}
            uppercase={true}
            mdSize={6}
            type="password"
          />
          <CustomCFormInputGroup
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={formErrors.confirmPassword}
            uppercase={true}
            mdSize={6}
            type="password"
          />
        </div>
        <div className="grid justify-end">
          <CButton
            color="primary"
            variant="outline"
            className="mr-2"
            onClick={handleSubmit}
          >
            {" "}
            Submit{" "}
          </CButton>
        </div>
      </div>
    </>
  );
};

export default AddBSUserAccountPage;

const initialValue = {
  userName: "",
  name: "",
  email: "",
  NIC: "",
  contactNo: "",
  accountType: "",
  branchName: "",
  password: "",
  confirmPassword: "",
};
