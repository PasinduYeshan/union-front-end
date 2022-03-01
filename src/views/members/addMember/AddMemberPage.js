import React, { useCallback, useEffect, useState, useRef } from "react";
import _ from "lodash";
import Joi from "joi";
import { toast } from "react-toastify";

// Stepper
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

const AddMemberPage = () => {
  /**
   * State
   */
  const [currentStep, setCurrentStep] = useState(1);
  const [member, setValue] = useState(initialValue);
  const [formData, setFormData] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});

  // TODO : Study on this
  // const { value, handleChange } = useInput("");

  /**
   * Handle functions
   */
  const handleNextBtn = async (e) => {
    const { error, value } = schema.validate(formData, { abortEarly: false });
    if (!error) {
      // At the end of the form, submit the form
      if (currentStep == stepComponents.length) {
        e.preventDefault();
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
    }
  };

  const handlePreviousBtn = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData({ ...formData, [name]: files });
    } else {
      delete formErrors[name];
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle add button pressed
  const handleAddBtnPressed = ({ e, tempFieldName }) => {
    if (!formData[tempFieldName]) {
      return;
    }
    const { name } = e.target;
    console.log("name", name);
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

  // Submit function
  const submit = async () => {
    //Add member logic
    const { childName, unionName, ...submitData } = formData;
    console.log("Submit Data", submitData);
    // On success
    toast.success("Successfull", {});
    setCurrentStep(1);
    setValue(initialValue);

    // On error
    // toast.error("Error", {});
  };

  /**
   * Stepper
   */
  const stepComponents = [
    <PersonalDetailsSection
      handleChange={handleChange}
      formData={formData}
      formErrors={formErrors}
    />,
    <FamilyDetailsSection
      handleChange={handleChange}
      formData={formData}
      formErrors={formErrors}
      handleAddBtnPressed={handleAddBtnPressed}
      handleChildRemoveBtnPressed={handleChildRemoveBtnPressed}
    />,
    <DepartmentDetailsSection
      member={member}
      handleChange={handleChange}
      formData={formData}
      formErrors={formErrors}
    />,
    <MemberDetailsSection
      handleChange={handleChange}
      formData={formData}
      formErrors={formErrors}
      handleAddBtnPressed={handleAddBtnPressed}
      handleChildRemoveBtnPressed={handleChildRemoveBtnPressed}
    />,
  ];

  const returnStepComponent = (step) => {
    return stepComponents[step - 1];
  };

  return (
    <>
      <div className="shadow sm:rounded-lg bg-white p-4 mb-5 row g-3">
        <div>
          {returnStepComponent(currentStep)}
          <StepperControl
            handleNextBtn={handleNextBtn}
            handlePreviousBtn={handlePreviousBtn}
            currentStep={currentStep}
            maxSteps={stepComponents.length}
            submitBtnText="Submit"
          />
        </div>
      </div>
    </>
  );
};

export default AddMemberPage;

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

// Joi validation schema
const schema = Joi.object({
  fullName: Joi.string().label("Full Name"),
  nameWithInitials: Joi.string().label("Name With Initials"),
  otherName: Joi.optional().label("Other Name"),
  oldNIC: Joi.optional().label("Old NIC"),
  newNIC: Joi.optional().label("New NIC"),
  dob: Joi.date().less("now").required().label("Date of Birth"),
  sex: Joi.string().label("Sex"),
  permanentAddress: Joi.string().label("Permanent Address"),
  mailingAddress: Joi.string().label("Mailing Address"),
  emailAddress: Joi.string()
    .email({ tlds: { allow: false } })
    .optional()
    .label("Email Address"),
  mobileCN: Joi.string().length(10).regex(/^\d+$/).label("Mobile Number"),
  officeCN: Joi.string()
    .length(10)
    .regex(/^\d+$/)
    .optional()
    .label("Office Number"),
  homeCN: Joi.string()
    .length(10)
    .regex(/^\d+$/)
    .optional()
    .label("Home Number"),
  civilStatus: Joi.string().label("Civil Status"),
  nominee: Joi.string().label("Nominee"),
  relationshipOfNominee: Joi.string().label("Relationship of Nominee"),

  //Family details
  spouseName: Joi.any().optional().label("Spouse Name"),
  children: Joi.any().optional().label("Children"),
  fatherName: Joi.any().optional().label("Father Name"),
  motherName: Joi.any().optional().label("Mother Name"),
  fatherInLawName: Joi.any().optional().label("Father In Law Name"),
  motherInLawName: Joi.any().optional().label("Mother In Law Name"),
  childName: Joi.any().optional().label("Child Name"),

  // Department details
  title: Joi.string().required().label("Title"),
  grade: Joi.string().required().label("Grade"),
  dateOfAppointment: Joi.date()
    .less("now")
    .required()
    .label("Date of Appointment"),
  permanentWorkStation: Joi.string().required().label("Permanent Work Station"),
  presentWorkStation: Joi.string().required().label("Present Work Station"),
  dateOfPension: Joi.string().required().label("Date of Pension"),
  officeOfRegionalAccountant: Joi.string()
    .required()
    .label("Office of the Regional Accountant"),
  paySheetNo: Joi.string().required().label("Pay Sheet No"),
  employeeId: Joi.string().required().label("Employee Id"),
  officeOfDPMG: Joi.string().required().label("Office of the DPMG"),

  // Member details
  membershipNo: Joi.string().required().label("Membership Number"),
  dateOfMembership: Joi.string().required().label("Date of Membership"),
  RDSNumber: Joi.string().required().label("RDS Number"),
  memberOfOtherUnion: Joi.string()
    .allow("Yes", "No")
    .label("Member of Other Union"),
  otherUnions: Joi.any().optional().label("Other Unions"),
  unionName: Joi.string().required().label("Union Name"),

  // Branch details
  branchName: Joi.string(),
});
