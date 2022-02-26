import React, { useState } from "react";

import {
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CBadge,
} from "@coreui/react";

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
const DepartmentDetailsSection = React.lazy(() => import("./DepartmentDetailsSection"));


const ViewMemberPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const stepArray = [
    "Personal Details",
    "Family Details",
    "Department Details",
    "Member Details",
  ];

  const stepComponents = [
    <PersonalDetailsSection member={member} />,
    <FamilyDetailsSection member={member} />,
    <PersonalDetailsSection member={member} />,
    <PersonalDetailsSection member={member} />,
  ];

  return (
    <>
      <div className="shadow sm:rounded-lg bg-white p-4 mb-5 row g-3">
        {/* <Stepper />
        <StepperControl /> */}
        <FamilyDetailsSection member={member} />
      </div>
    </>
  );
};

export default ViewMemberPage;

const member = {
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
  memberOfOtherUnion: "NO",
  namesOfOtherUnions: "",

  // Branch details
  branchName: "KALMUNAI/AMPARA",
};
