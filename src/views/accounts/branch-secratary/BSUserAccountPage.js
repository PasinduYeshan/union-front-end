import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Joi from "joi";

import {
  CustomCFormInputGroup,
  CustomCFormSelectGroup,
} from "src/components/common/CustomCInputGroup";

import { CButton, CFormSwitch } from "@coreui/react";

const BSUserAccountPage = () => {
  const { userId } = useParams();

  const [formData, setFormData] = useState(userAccount);
  const [formErrors, setFormErrors] = useState({});
  const [passwordData, setPasswordData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [updateMode, setUpdateMode] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  // Joi schema
  const schema = Joi.object({
    name: Joi.string().optional().label("name"),
    username: Joi.string().optional().label("Username"),
    password: Joi.string().optional().label("Password"),
    status: Joi.string().optional().label("Password"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .optional()
      .label("Email"),
    contactNo: Joi.string().optional().label("Contact Number"),
    NIC: Joi.string().optional().label("NIC"),
    branchName: Joi.string().optional().label("Branch Name"),
    accountType: Joi.string().optional().label("Access Level"),
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

  // Handle password update button
  const handlePasswordSubmit = (e) => {
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
      <div className="shadow sm:rounded-lg bg-white p-4 mt-2 mb-5 row g-3">
        {/* <h1 className="text-xl font-semibold mb-3">Branch Ser</h1> */}
        <div className="grid justify-end">
          <CFormSwitch
            //   size="xl"
            label="Enable Update Mode"
            id="formSwitchCheckDefault"
            onChange={() => {
              setUpdateMode(!updateMode);
              setFormData(userAccount);
            }}
          />
        </div>
        <div className="row g-3">
          <CustomCFormInputGroup
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={formErrors.name}
            uppercase={true}
            required={false}
            readOnly={!updateMode}
          />
          <CustomCFormInputGroup
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={formErrors.email}
            uppercase={true}
            required={false}
            readOnly={!updateMode}
            mdSize={6}
          />
          <CustomCFormInputGroup
            label="Branch Name"
            name="branchName"
            value={formData.branchName}
            onChange={handleChange}
            error={formErrors.branchName}
            uppercase={true}
            required={false}
            readOnly={!updateMode}
            mdSize={6}
          />
          <CustomCFormInputGroup
            label="NIC"
            name="NIC"
            value={formData.NIC}
            onChange={handleChange}
            error={formErrors.NIC}
            uppercase={true}
            required={false}
            readOnly={!updateMode}
            mdSize={6}
          />
          <CustomCFormInputGroup
            label="Contact Number"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            error={formErrors.contactNo}
            uppercase={true}
            required={false}
            readOnly={!updateMode}
            mdSize={6}
          />
          <CustomCFormInputGroup
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            error={formErrors.username}
            uppercase={true}
            required={false}
            readOnly={!updateMode}
            mdSize={4}
          />

          {updateMode ? (
            <CustomCFormSelectGroup
              label="Access Level"
              name="accountType"
              defaultValue={formData.accountType}
              onChange={handleChange}
              error={formErrors.accountType}
              uppercase={true}
              required={false}
              mdSize={4}
              options={[
                { value: "bsEditor", label: "Editor" },
                { value: "bsViewer", label: "Viewer" },
              ]}
            />
          ) : (
            <CustomCFormInputGroup
              label="Access Level"
              name="accountType"
              value={formData.accountType == "bsEditor" ? "Editor" : "Viewer"}
              uppercase={true}
              required={false}
              readOnly={!updateMode}
              mdSize={4}
            />
          )}
          {updateMode ? (
            <CustomCFormSelectGroup
              label="Account Status"
              name="status"
              defaultValue={formData.status}
              onChange={handleChange}
              error={formErrors.status}
              uppercase={true}
              required={false}
              mdSize={4}
              options={[
                { value: "Active", label: "Active" },
                { value: "Inactive", label: "Inactive" },
              ]}
            />
          ) : (
            <CustomCFormInputGroup
              label="Account Status"
              name="status"
              value={formData.status}
              uppercase={true}
              required={false}
              readOnly={!updateMode}
              mdSize={4}
            />
          )}
        </div>
        <div className="grid justify-end" hidden={!updateMode}>
          <CButton
            color="primary"
            variant="outline"
            className="mr-2"
            onClick={handleSubmit}
          >
            Update Account
          </CButton>
        </div>
        <div className="grid justify-start" hidden={!updateMode}>
          <CButton
            color="primary"
            variant="ghost"
            className="mr-2"
            onClick={() => {
              setChangePassword(!changePassword);
            }}
          >
            Change Password
          </CButton>
        </div>

        <div className="row g-3" hidden={!updateMode | !changePassword}>
          <CustomCFormInputGroup
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={formErrors.password}
            uppercase={true}
            required={false}
            readOnly={!updateMode}
            mdSize={6}
          />
          <CustomCFormInputGroup
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={formErrors.confirmPassword}
            uppercase={true}
            required={false}
            readOnly={!updateMode}
            mdSize={6}
          />
          <div className="grid justify-end">
            <CButton
              color="primary"
              variant="outline"
              className="mr-2"
              onClick={handlePasswordSubmit}
            >
              Update Password
            </CButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default BSUserAccountPage;

const userAccount = {
  userId: "1wrewer",
  name: "John Doe",
  username: "johndoe",
  email: "john@gmail.com",
  contactNo: "07898989898",
  branchName: "Horana",
  status: "Active",
  NIC: "123456789",
  accountType: "bsEditor",
};
