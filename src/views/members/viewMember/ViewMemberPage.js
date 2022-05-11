import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import _ from "lodash";
import { toast } from "react-toastify";

import { CButton, CFormSwitch } from "@coreui/react";

import api, { registerAccessToken } from "src/api";
import store, { thunks, selectors, accessToken } from "src/store";
import { addEmptyStrings, getUpdatedDataOnly } from "src/utils/function";

/**
 * Component Imports
 */

// Stepper
const Stepper = React.lazy(() => import("../../../components/common/Stepper"));
const StepperControl = React.lazy(() =>
  import("../../../components/common/StepperControl")
);

// Steps
const PersonalDetailsSection = React.lazy(() =>
  import("./PersonalDetailSection")
);
const FamilyDetailsSection = React.lazy(() => import("./FamilyDetailsSection"));
const DepartmentDetailsSection = React.lazy(() =>
  import("./DepartmentDetailsSection")
);
const MemberDetailsSection = React.lazy(() => import("./MemberDetailsSection"));

import SearchBars from "./SearchBars";

// Joi Schemas
import {
  personalDetailsSchema,
  familyDetailsSchema,
  departmentDetailsSchema,
  memberDetailsSchema,
} from "./joiSchemas";

/**
 *  Component for Viewing and Updating Member Details
 */
const ViewMemberPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useLocation().state?.memberId;
  const fromList = useLocation().state?.fromList || false; // If user is coming from list page then no Search Box should be appears

  const [currentStep, setCurrentStep] = useState(1);
  const [searchValue, setSearchValue] = useState({
    oldNIC: "",
    newNIC: "",
  });
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialValue);
  const [initialAccount, setInitialAccount] = useState({});
  const [formErrors, setFormErrors] = useState(initialValue);
  const [updateMode, setUpdateMode] = useState(false);

  // Fetch member if userId is provided
  useEffect(() => {
    fetchMemberByUserID().catch((e) => console.log(e));
  }, []);

  // Fetch member by userId
  const fetchMemberByUserID = async () => {
    if (!userId) return;
    if (!registerAccessToken(accessToken(), history, dispatch)) return;
    setLoading(true);
    const res = await api.member.getByUserId(userId);
    if (res && res.status == 200) {
      setFormData(addEmptyStrings(res.data));
      setInitialAccount(addEmptyStrings(res.data));
    } else {
      toast.error(
        res.message ? res.message : "Error occurred, please try again"
      );
    }
    setLoading(true);
  };

  // Fetch member with old NIC or new NIC if provided
  const fetchMember = async (query) => {
    if (!registerAccessToken(accessToken(), history, dispatch)) return;
    const res = await api.member.get(query);
    if (res && res.status == 200) {
      setFormData(addEmptyStrings(res.data));
      setInitialAccount(addEmptyStrings(res.data));
    } else {
      setFormData(initialValue);
      setInitialAccount({});
      toast.error(
        res.message ? res.message : "Error occurred, please try again"
      );
    }
  };

  // Submit function
  const submit = async () => {
    //Add member logic
    const { childName, unionName, ...submitData } = formData;
    if (!registerAccessToken(accessToken(), history, dispatch)) return;
    const res = await api.member.update(formData.userId, getUpdatedDataOnly(initialAccount, formData));
    if (res && res.status === 200) {
      toast.success("Member updated successfully");
      setUpdateMode(false);
      setCurrentStep(1);
    } else {
      toast.error(res.message ? res.message : "Something went wrong");
    }
  };

  /**
   * Update Handler
   */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData({ ...formData, [name]: files });
    } else if (name == "memberOfOtherUnion" && value === "No") {
      // If member is not member of other union then clear the union details
      delete formErrors[name];
      setFormData({ ...formData, [name]: value, otherUnions: [] });
    } else {
      delete formErrors[name];
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle add button pressed
  const handleAddBtnPressed = ({ e, tempFieldName }) => {
    const { name } = e.target;
    if (!formData[tempFieldName]) {
      return;
    }

    setFormData({
      ...formData,
      [name]: [...formData[name], { name: formData[tempFieldName] }],
    });
  };

  // Handle child remove button from list
  const handleChildRemoveBtnPressed = ({ child, listName }) => {
    const listTemp = formData[listName].filter(
      (item) => item.name !== child.name
    );
    setFormData({ ...formData, [listName]: listTemp });
  };

  /**
   * Search Handlers
   */
  const handleSearchChange = (event) => {
    if (event.target.name === "oldNIC") {
      setSearchValue({
        ...searchValue,
        oldNIC: event.target.value,
      });
    } else {
      setSearchValue({
        ...searchValue,
        newNIC: event.target.value,
      });
    }
  };

  const handleSearch = async (event) => {
    const { name, value } = event.target;
    if (name === "oldNICSearch") {
      await fetchMember({ oldNIC: searchValue.oldNIC });
    } else {
      await fetchMember({ newNIC: searchValue.newNIC });
    }
  };

  /**
   * Stepper handlers
   */
  const handleNextBtn = async (e) => {
    let schema;
    let checkData;
    switch (currentStep) {
      case 1:
        schema = personalDetailsSchema;
        checkData = _.pick(formData, [
          "fullName",
          "nameWithInitials",
          "otherName",
          "oldNIC",
          "newNIC",
          "dob",
          "sex",
          "permanentAddress",
          "mailingAddress",
          "emailAddress",
          "mobileCN",
          "officeCN",
          "homeCN",
          "civilStatus",
          "nominee",
          "relationshipOfNominee",
        ]);
        break;
      case 2:
        schema = familyDetailsSchema;
        checkData = _.pick(formData, [
          "spouseName",
          "children",
          "fatherName",
          "motherName",
          "fatherInLawName",
          "motherInLawName",
          "childName",
        ]);
        break;
      case 3:
        schema = departmentDetailsSchema;
        checkData = _.pick(formData, [
          "title",
          "grade",
          "dateOfAppointment",
          "permanentWorkStation",
          "presentWorkStation",
          "dateOfPension",
          "officeOfRegionalAccountant",
          "paySheetNo",
          "employeeId",
          "officeOfDPMG",
        ]);
        break;
      default:
        schema = memberDetailsSchema;
        checkData = _.pick(formData, [
          "membershipNo",
          "dateOfMembership",
          "RDSNumber",
          "memberOfOtherUnion",
          "otherUnions",
          "unionName",
          "branchName",
        ]);
        break;
    }
    const { error, value } = schema.validate(checkData, { abortEarly: false });
    if (!error) {
      // At the end of the form, submit the form
      if (currentStep == stepComponents.length) {
        await submit();
        return;
      }
      setCurrentStep(currentStep + 1);
    } else {
      const errors = {};
      for (let item of error.details) {
        errors[item.path[0]] = item.message;
      }
      setFormErrors(errors);
      // setTimeout(() => {
      //   setCurrentStep(currentStep + 1);
      //   return;
      // }, 2000);
    }
  };

  const handlePreviousBtn = () => {
    setCurrentStep(currentStep - 1);
  };

  /**
   * Stepper
   */
  const stepComponents = [
    <PersonalDetailsSection
      member={formData}
      formErrors={formErrors}
      onChange={handleChange}
      onAddBtnPressed={handleAddBtnPressed}
      onChildRemoveBtnPressed={handleChildRemoveBtnPressed}
      readOnly={!updateMode}
    />,
    <FamilyDetailsSection
      member={formData}
      formErrors={formErrors}
      onChange={handleChange}
      onAddBtnPressed={handleAddBtnPressed}
      onChildRemoveBtnPressed={handleChildRemoveBtnPressed}
      readOnly={!updateMode}
    />,
    <DepartmentDetailsSection
      member={formData}
      formErrors={formErrors}
      onChange={handleChange}
      onAddBtnPressed={handleAddBtnPressed}
      onChildRemoveBtnPressed={handleChildRemoveBtnPressed}
      readOnly={!updateMode}
    />,
    <MemberDetailsSection
      member={formData}
      formErrors={formErrors}
      onChange={handleChange}
      onAddBtnPressed={handleAddBtnPressed}
      onChildRemoveBtnPressed={handleChildRemoveBtnPressed}
      readOnly={!updateMode}
    />,
  ];

  const returnStepComponent = (step) => {
    return stepComponents[step - 1];
  };

  return (
    <>
      <div className="shadow sm:rounded-lg bg-white p-4 mb-5 row g-3">
        {currentStep == 1 && !fromList ? (
          <SearchBars
            handleChange={handleSearchChange}
            value={searchValue}
            handleSearch={handleSearch}
          />
        ) : null}
        {!_.isEmpty(initialAccount) && (
          <div>
            <div className="grid justify-end">
              <CFormSwitch
                //   size="xl"
                label="Enable Update Mode"
                id="formSwitchCheckDefault"
                checked={updateMode}
                onChange={() => {
                  setUpdateMode(!updateMode);
                  setFormData(initialAccount);
                }}
              />
            </div>
            <div>
              {returnStepComponent(currentStep)}
              <StepperControl
                handleNextBtn={handleNextBtn}
                handlePreviousBtn={handlePreviousBtn}
                currentStep={currentStep}
                maxSteps={stepComponents.length}
                readOnly={!updateMode}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewMemberPage;

const initialValue = {
  // personal details
  fullName: "",
  nameWithInitials: "",
  otherName: "",
  oldNIC: "",
  newNIC: "",
  dob: "",
  sex: "",
  permanentAddress: "",
  mailingAddress: "",
  emailAddress: "",
  mobileCN: "",
  officeCN: "",
  homeCN: "",
  civilStatus: "",
  nominee: "",
  relationshipOfNominee: "",

  //Family details
  spouseName: "",
  children: [],
  fatherName: "",
  motherName: "",
  fatherInLawName: "",
  motherInLawName: "",
  childName: "",

  // Department details
  title: "",
  grade: "",
  dateOfAppointment: "",
  permanentWorkStation: "",
  presentWorkStation: "",
  dateOfPension: "",
  officeOfRegionalAccountant: "",
  paySheetNo: "",
  employeeId: "",
  officeOfDPMG: "",

  // Member details
  membershipNo: "",
  dateOfMembership: "",
  RDSNumber: "",
  memberOfOtherUnion: "",
  otherUnions: [],
  unionName: "",

  // Branch details
  branchName: "",
};
