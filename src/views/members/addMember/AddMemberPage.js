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
  const handleNextBtn = (e) => {
    // At the end of the form, submit the form
    if (currentStep == stepComponents.length) {
      e.preventDefault();
      const { error, value } = schema.validate(formData, { abortEarly: false });
      if (!error) {
        //Add member logic
        console.log("Form Data", formData);
        // On success
        toast.success("Successfull", {});
        setCurrentStep(1);
        setValue(initialValue);

        // On error
        // toast.error("Error", {});
      } else {
        console.log("Error", error);
        const errors = {};
        for (let item of error.details) {
          errors[item.path[0]] = item.message;
        }
        setFormErrors(errors);
      }

      return;
    }
    setCurrentStep(currentStep + 1);
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

  /**
   * Stepper
   */
  const stepComponents = [
    <PersonalDetailsSection
      handleChange={handleChange}
      formData={formData}
      formErrors={formErrors}
    />,
    // <FamilyDetailsSection
    //   member={member}
    //   handleChange={handleChange}
    //   formData={formData}
    //   formErrors={formErrors}
    // />,
    // <DepartmentDetailsSection
    //   member={member}
    //   handleChange={handleChange}
    //   formData={formData}
    //   formErrors={formErrors}
    // />,
    // <MemberDetailsSection
    //   member={member}
    //   handleChange={handleChange}
    //   formData={formData}
    //   formErrors={formErrors}
    // />,
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

  // //Family details
  // spouseName: "",
  // children: [],
  // fatherName: "",
  // motherName: "",
  // fatherInLawName: "",
  // motherInLawName: "",

  // // Department details
  // title: "",
  // grade: "",
  // dateOfAppointment: "",
  // permanentWorkStation: "",
  // presentWorkStation: "",
  // dateOfPension: "",
  // officeOfRegionalAccountant: "",
  // paySheetNo: "",
  // employeeId: "",
  // officeOfDPMG: "",

  // // Member details
  // membershipNo: "",
  // dateOfMembership: "",
  // RDSNumber: "",
  // memberOfOtherUnion: "",
  // namesOfOtherUnions: [],

  // // Branch details
  // branchName: "",
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
  officeCN: Joi.string().length(10).regex(/^\d+$/).optional().label("Office Number"),
  homeCN: Joi.string().length(10).regex(/^\d+$/).optional().label("Home Number"),
  civilStatus: Joi.string().label("Civil Status"),
  nominee: Joi.string().label("Nominee"),
  relationshipOfNominee: Joi.string().label("Relationship of Nominee"),

  // //Family details
  // spouseName: Joi.string(),
  // children: Joi.any(),
  // fatherName: Joi.string(),
  // motherName: Joi.string(),
  // fatherInLawName: Joi.string(),
  // motherInLawName: Joi.string(),

  // // Department details
  // title: Joi.string(),
  // grade: Joi.string(),
  // dateOfAppointment: Joi.string(),
  // permanentWorkStation: Joi.string(),
  // presentWorkStation: Joi.string(),
  // dateOfPension: Joi.string(),
  // officeOfRegionalAccountant: Joi.string(),
  // paySheetNo: Joi.string(),
  // employeeId: Joi.string(),
  // officeOfDPMG: Joi.string(),

  // // Member details
  // membershipNo: Joi.string(),
  // dateOfMembership: Joi.string(),
  // RDSNumber: Joi.string(),
  // memberOfOtherUnion: Joi.string(),
  // namesOfOtherUnions: Joi.any(),

  // // Branch details
  // branchName: Joi.string(),
});
