import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Joi from "joi";
import api, { registerAccessToken } from "../../api";
import store, { thunks, selectors, accessToken } from "../../store";

import {
  CustomCFormInputGroup,
  CustomCFormSelectGroup,
} from "src/components/common/CustomCInputGroup";

import { CButton } from "@coreui/react";

const AddBSUserAccountPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentLocation = useLocation().pathname;

  const [formData, setFormData] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const branchNameOptions = useSelector(selectors.meta.selectBranchNameOptions);
  const [accountType, setAccountType] = useState("");
  const [accountTypeOptions, setAccountTypeOptions] = useState([]);

  // Set accountsType
  useEffect(() => {
    // Get account types
    const locations = currentLocation.split("/");
    switch (locations[3]) {
      case "branch-secretary":
        setAccountType("branchSecretary");
        setAccountTypeOptions([
          { value: "bsEditor", label: "Editor" },
          { value: "bsViewer", label: "Viewer" },
        ]);
        break;
      case "officer":
        setAccountTypeOptions([{ value: "officer", label: "Officer" }]);
        setAccountType("officer");
        break;
      case "admin":
        setAccountTypeOptions([
          { value: "adminEditor", label: "Editor" },
          { value: "adminViewer", label: "Viewer" },
        ]);
        setAccountType("admin");
        break;
      default:
        break;
    }
  }, []);

  // Fetch branches
  useEffect(() => {
    const fetchData = async () => {
      const res = await dispatch(thunks.meta.getBranches());
      if (res.status != 200) {
        console.log("Error Occurred while fetching branches", res);
        toast.error("Error Occurred, Sorry for the inconvenience");
      }
    };

    fetchData().catch((err) => console.log(err));
  }, []);

  // Joi schema
  const schema = Joi.object({
    username: Joi.string().required().label("Username"),
    name: Joi.string().required().label("Name"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    contactNo: Joi.string().required().label("Contact Number"),
    NIC: Joi.string().required().label("NIC"),
    branchName: Joi.string().required().label("Branch Name"),
    accountType: Joi.string().required().label("Access Level"),
  });

  /*
   * Account Type Related Functions
   */

  /*
   * Form related functions
   */

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData({ ...formData, [name]: files });
    } else {
      delete formErrors[name];
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle add branch secretary user account
  const handleSubmit = async (e) => {
    const { error, value } = schema.validate(formData, { abortEarly: false });
    if (!error) {
      e.preventDefault();
      if (!registerAccessToken(accessToken(), history, dispatch)) return;
      const res = await api.user.register(formData);
      if (res.status === 200) {
        toast.success("Successfully Added");
        setFormData(initialValue);
      } else {
        toast.error(res.message ? res.message : "Error occurred. Please try again later.");
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
          <CustomCFormSelectGroup
            label="Branch Name"
            name="branchName"
            value={formData.branchName}
            onChange={handleChange}
            error={formErrors.branchName}
            uppercase={true}
            mdSize={6}
            options={branchNameOptions}
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
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            error={formErrors.contactNo}
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
            options={accountTypeOptions}
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
  username: "",
  name: "",
  email: "",
  NIC: "",
  contactNo: "",
  accountType: "",
  branchName: "",
};
