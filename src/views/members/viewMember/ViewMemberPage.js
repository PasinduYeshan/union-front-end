import React, { useCallback, useEffect, useState } from "react";
import _ from "lodash";

import SearchBars from "./SearchBars";

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

const ViewMemberPage = () => {
  /**
   * State
   */
  const [currentStep, setCurrentStep] = useState(1);
  const [value, setValue] = useState({
    oldNIC: "",
    newNIC: "",
  });
  const [member, setMember] = useState({});

  // TODO : Study on this
  // const { value, handleChange } = useInput("");

  useEffect(() => {
  }, []);

  /**
   * Handle functions
   */
  const handleChange = (event) => {
    if (event.target.name === "oldNIC") {
      setValue({
        ...value,
        oldNIC: event.target.value,
      });
    } else {
      setValue({
        ...value,
        newNIC: event.target.value,
      });
    }
  };

  const handleSearch = (event) => {
    if (event.target.name === "oldNICSearch") {
    } else {
    }
    setMember(memberData);
  };

  const handleNextBtn = () => {
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
        {currentStep == 1 ? (
          <SearchBars
            handleChange={handleChange}
            value={value}
            handleSearch={handleSearch}
          />
        ) : null}
        {!_.isEmpty(member) && (
          <div>
            {returnStepComponent(currentStep)}
            <StepperControl
              handleNextBtn={handleNextBtn}
              handlePreviousBtn={handlePreviousBtn}
              currentStep={currentStep}
              maxSteps={stepComponents.length}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ViewMemberPage;

const memberData = {
  // personal details
  userId: "jfsajfsdj346",
  fullName: "BALARATNAM BAHEERATHAN",
  nameWithInitials: "B.BAHEERATHAN",
  otherName: "NIL",
  oldNIC: "823481438V",
  newNIC: "NIL",
  dob: "1982-12-13",
  sex: "male",
  permanentAddress: "576/C, THARUMAR ROAD, PANDIRUPPU 02, KALMUNAI",
  mailingAddress: "POST OFFICE, OLUVIL",
  emailAddress: "baheybalah@gmail.com",
  mobileCN: "0761397802",
  officeCN: "0672255050",
  homeCN: "0672059820",
  civilStatus: "MARRIED",
  nominee: "MRS. JANUJA BAHEERATHAN",
  relationshipOfNominee: "WIFE",

  //Family details
  spouseName: "MRS. JANUJA BAHEERATHAN",
  children: [
    {
      name: "BAHEERATHAN THANUSITH",
      dob: "2020-01-01",
    },
    {
      name: "KESHANYA BAHEERATHAN",
      dob: "2020-01-01",
    },
  ],
  fatherName: "MR. V. BALARATNAM",
  motherName: "MRS.B.  MANKAYATKARASU",
  fatherInLawName: "MR. N. RASALINGAM",
  motherInLawName: "MRS. S. SUHIRTHADEVI",

  // Department details
  title: "POSTAL SERVICE OFFICER",
  grade: "CLASS II",
  dateOfAppointment: "2008-09-01",
  permanentWorkStation: "OLUVIL POST OFFICE",
  presentWorkStation: "OLUVIL POST OFFICE",
  dateOfPension: "2047-12-12",
  officeOfRegionalAccountant: "BATTICALOA",
  paySheetNo: 28,
  employeeId: 464,
  officeOfDPMG: "BATTICALOA",

  // Member details
  membershipNo: "B1125",
  dateOfMembership: "2009-04-05",
  RDSNumber: "0258",
  memberOfOtherUnion: "Yes",
  namesOfOtherUnions: ["UNION1", "UNION2"],

  // Branch details
  branchName: "KALMUNAI/AMPARA",
};
