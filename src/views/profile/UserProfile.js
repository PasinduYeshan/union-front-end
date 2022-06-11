import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Joi from "joi";
import { CButton, CFormSwitch } from "@coreui/react";
import _ from "lodash";

import api, { registerAccessToken } from "src/api";
import store, { accessToken, selectors, thunks } from "src/store";

import { CustomModal } from "src/components";
import {
  CustomCFormInputGroup,
  CustomCFormSelectGroup,
} from "src/components/common/CustomCInputGroup";

const UserProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const branchNameOptions = useSelector(selectors.meta.selectBranchNameOptions);
  const userId = useSelector(selectors.user.selectUserId);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [initialAccount, setInitialAccount] = useState({});
  const [formErrors, setFormErrors] = useState(initialState);
  const [updateMode, setUpdateMode] = useState(false);
  const [passwordSection, setPasswordSection] = useState(false);
  const [passwordData, setPasswordData] = useState(initialPasswordValues);
  const [passwordError, setPasswordError] = useState(initialPasswordValues);

  // Modal related states
  const [modalVisibility, setModalVisibility] = useState(false);

  // Fetch user Data from backend
  useEffect(() => {
    let isSubscribed = true;

    setLoading(true);
    const fetchUserData = async () => {
      if (!registerAccessToken(accessToken(), history, dispatch)) return;
      const res = await api.user.getUserProfile();

      if (res.status === 200) {
        setFormData(res.data);
        setInitialAccount(res.data);
      } else {
        console.log("Error fetching user data", res);
        toast.error("Check your internet connection");
      }

      dispatch(thunks.meta.getBranches());
    };

    fetchUserData().catch((err) => console.log(err));
    setLoading(false);

    // Cancel any pending request
    return () => (isSubscribed = false);
  }, []);

  // Joi schema
  const schema = Joi.object({
    name: Joi.string().optional().label("Name"),
    status: Joi.string().optional().label("Status"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .optional()
      .label("Email"),
    contactNo: Joi.string().optional().label("Contact Number"),
    NIC: Joi.string().optional().label("NIC"),
  });

  // Joi schema for password change
  const passwordSchema = Joi.object({
    password: Joi.string().exist().label("Password"),
    currentPassword: Joi.string().exist().label("Current Password"),
    confirmPassword: Joi.string()
      .equal(Joi.ref("password"))
      .label("Confirm Password"),
  });

  /*
   * Handling account type related logic
   */
  const getAccountTypeLabel = (accountType) => {
    switch (accountType) {
      case "bsEditor":
        return "Editor";
      case "bsViewer":
        return "Viewer";
      case "adminEditor":
        return "Editor";
      case "adminViewer":
        return "Viewer";
      case "officer":
        return "Officer";
      default:
        return "";
    }
  };

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

  // Handle password change
  const handlePasswordChange = (e) => {
    const { name, value, files } = e.target;
    delete passwordError[name];
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleSubmit = async (e) => {
    if (!updateMode) {
      return;
    }
    const formD = _.pick(formData, [
      "name",
      "email",
      "contactNo",
      "NIC",
      "status",
    ]);
    const { error, value } = schema.validate(formD, { abortEarly: false });
    if (!error) {
      e.preventDefault();
      if (!registerAccessToken(accessToken(), history, dispatch)) return;
      const res = await api.user.updateProfile(formD);
      if (res.status === 200) {
        toast.success("Account Updated Successfully");
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

  // Handle password submit
  const handlePasswordSubmit = async (e) => {
    if (!updateMode) {
      return;
    }
    const { error, value } = passwordSchema.validate(passwordData, {
      abortEarly: false,
    });
    if (!error) {
      e.preventDefault();
      if (!registerAccessToken(accessToken(), history, dispatch)) return;
      const res = await api.user.updatePassword(passwordData);
      if (res.status === 200) {
        toast.success("Password Updated Successfully");
        setPasswordSection(false);
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
      setPasswordError(errors);
    }
  };

  // Handle password update button
  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    const res = await api.user.forgotPassword(formData.email);
    if (res.status === 200) {
      toast.success("Password reset link sent to the user's email");
    } else {
      console.log("Error resetting password", res);
      toast.error("Error Occurred, Please Try Again");
    }
    setModalVisibility(false);
  };

  return (
    <>
      <div className="shadow sm:rounded-lg bg-white p-4 mt-2 mb-5 row g-3">
        {/* <h1 className="text-xl font-semibold mb-3">Branch Ser</h1> */}
        <CustomModal
          visible={modalVisibility}
          onSubmit={handleResetPasswordSubmit}
          onClose={() => setModalVisibility(false)}
          message="Are you sure you want to reset password?"
          submitLabel="Reset Password"
        />
        <div className="grid justify-end">
          <CFormSwitch
            //   size="xl"
            label="Enable Update Mode"
            id="formSwitchCheckDefault"
            onChange={() => {
              setUpdateMode(!updateMode);
              setFormData(initialAccount);
            }}
          />
        </div>
        <div className="row g-3">
          {CustomCFormInputGroup({
            label: "Name",
            name: "name",
            value: formData.name,
            onChange: handleChange,
            error: formErrors.name,
            uppercase: true,
            required: false,
            readOnly: !updateMode,
          })}

          {CustomCFormInputGroup({
            label: "Email Address",
            name: "email",
            value: formData.email,
            onChange: handleChange,
            error: formErrors.email,
            uppercase: true,
            required: false,
            readOnly: !updateMode,
          })}
          <CustomCFormInputGroup
            label="Branch Name"
            name="branchName"
            value={formData.branchName}
            uppercase={true}
            required={false}
            readOnly={true}
            mdSize={4}
          />
          {CustomCFormInputGroup({
            label: "NIC",
            name: "NIC",
            value: formData.NIC,
            onChange: handleChange,
            error: formErrors.NIC,
            uppercase: true,
            required: false,
            readOnly: !updateMode,
            mdSize: 4,
          })}
          {CustomCFormInputGroup({
            label: "Contact Number",
            name: "contactNo",
            value: formData.contactNo,
            onChange: handleChange,
            error: formErrors.contactNo,
            uppercase: true,
            required: false,
            readOnly: !updateMode,
            mdSize: 4,
          })}
          {CustomCFormInputGroup({
            label: "Username",
            name: "username",
            value: formData.username,
            error: formErrors.username,
            uppercase: true,
            required: false,
            readOnly: true,
            mdSize: 4,
          })}

          <CustomCFormInputGroup
            label="Access Level"
            name="accountType"
            value={getAccountTypeLabel(formData.accountType)}
            uppercase={true}
            required={false}
            readOnly={true}
            mdSize={4}
          />
          {updateMode ? (
            <CustomCFormSelectGroup
              label="Account Status"
              name="status"
              value={formData.status}
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
              setPasswordSection(!passwordSection);
            }}
          >
            Change Password
          </CButton>
        </div>
        {passwordSection && (
          <div className="row g-3">
            <div className="row g-3">
              {CustomCFormInputGroup({
                label: "Current Password",
                name: "currentPassword",
                value: passwordData.currentPassword,
                error: passwordError.currentPassword,
                onChange: handlePasswordChange,
                uppercase: true,
                required: false,
                readOnly: !updateMode,
                mdSize: 6,
                type: "password",
              })}
            </div>
            {CustomCFormInputGroup({
              label: "New Password",
              name: "password",
              value: passwordData.password,
              error: passwordError.password,
              onChange: handlePasswordChange,
              uppercase: true,
              required: false,
              readOnly: !updateMode,
              mdSize: 6,
              type: "password",
            })}
            {CustomCFormInputGroup({
              label: "Confirm Password",
              name: "confirmPassword",
              value: passwordData.confirmPassword,
              error: passwordError.confirmPassword,
              onChange: handlePasswordChange,
              uppercase: true,
              required: false,
              readOnly: !updateMode,
              mdSize: 6,
              type: "password",
            })}
            <div className="grid justify-start" hidden={!updateMode}>
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
        )}
      </div>
    </>
  );
};

export default UserProfile;

const initialState = {
  name: "",
  email: "",
  branchName: "",
  NIC: "",
  contactNo: "",
  username: "",
  accountType: "",
  status: "",
};

const initialPasswordValues = {
  currentPassword: "",
  password: "",
  confirmPassword: "",
};
