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

  // TODO : Study on this
  // const { value, handleChange } = useInput("");

  /**
   * Handle functions
   */

  const handleNextBtn = () => {
    // At the end of the form, submit the form
    if (currentStep == stepComponents.length) {
      // On success
      toast.success("Successfull", {});
      setCurrentStep(1);
      setValue(initialValue);

      // On error
      // toast.error("Error", {});
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousBtn = () => {
    setCurrentStep(currentStep - 1);
  };

  /**
   * Stepper
   */
  const stepComponents = [
    <PersonalDetailsSection member={member} />,
    <FamilyDetailsSection member={member} />,
    <DepartmentDetailsSection member={member} />,
    <MemberDetailsSection member={member} />,
  ];

  const returnStepComponent = (step) => {
    console.log(step);
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
  namesOfOtherUnions: [],

  // Branch details
  branchName: "",
};

// Joi validation schema
const schema = Joi.object({
  fullName: Joi.string().required(),
  nameWithInitials: Joi.string().required(),
  otherName: Joi.string().required(),
  oldNIC: Joi.string().required(),
  newNIC: Joi.string().required(),
  dob: Joi.string().required(),
  sex: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  mailingAddress: Joi.string().required(),
  emailAddress: Joi.string().required(),
  mobileCN: Joi.string().required(),
  officeCN: Joi.string().required(),
  homeCN: Joi.string().required(),
  civilStatus: Joi.string().required(),
  nominee: Joi.string().required(),
  relationshipOfNominee: Joi.string().required(),

  //Family details
  spouseName: Joi.string().required(),
  children: [],
  fatherName: Joi.string().required(),
  motherName: Joi.string().required(),
  fatherInLawName: Joi.string().required(),
  motherInLawName: Joi.string().required(),

  // Department details
  title: Joi.string().required(),
  grade: Joi.string().required(),
  dateOfAppointment: Joi.string().required(),
  permanentWorkStation: Joi.string().required(),
  presentWorkStation: Joi.string().required(),
  dateOfPension: Joi.string().required(),
  officeOfRegionalAccountant: Joi.string().required(),
  paySheetNo: Joi.string().required(),
  employeeId: Joi.string().required(),
  officeOfDPMG: Joi.string().required(),

  // Member details
  membershipNo: Joi.string().required(),
  dateOfMembership: Joi.string().required(),
  RDSNumber: Joi.string().required(),
  memberOfOtherUnion: Joi.string().required(),
  namesOfOtherUnions: [],

  // Branch details
  branchName: Joi.string().required(),
});
