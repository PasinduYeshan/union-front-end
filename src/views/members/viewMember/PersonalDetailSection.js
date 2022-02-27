import React from "react";

import {
  CForm,
  CFormInput,
  CFormLabel,
  CCol,
  CFormTextarea,
  CBadge,
} from "@coreui/react";

const PersonalDetailsSection = ({ member }) => {
  const issue = {
    issueId: "ksdfjklsd3213",
    telephone: "07898989898",
    title: "Salary Problem",
    name: "John Doe",
    issueDate: "2020-01-01",
    status: "Open",
    description: "Salary should be increased ",
  };

  return (
    <>
      <h1 className="text-xl font-semibold mb-3">Personal Details</h1>
      <div className="row g-3">
        
        <CCol className="mb-3" xs={12}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">Full Name</CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.fullName}
          />
        </CCol>
        <CCol className="mb-3" xs={12}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Name With Initials
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.nameWithInitials}
          />
        </CCol>
        <CCol className="mb-3" xs={12}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">Other Name</CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.otherName}
          />
        </CCol>
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">Old NIC No</CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.oldNIC}
          />
        </CCol>
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">New NIC No</CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.newNIC}
          />
        </CCol>
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Date of Birth
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.dob}
          />
        </CCol>
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">Sex</CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.sex}
          />
        </CCol>
        <CCol className="mb-3" xs={12}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Permanent Address
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.permanentAddress}
          />
        </CCol>
        <CCol className="mb-3" xs={12}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Mailing Address
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.mailingAddress}
          />
        </CCol>
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Email Address
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.emailAddress}
          />
        </CCol>
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Civil Status
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.civilStatus}
          />
        </CCol>
        <CCol className="mb-3" md={4}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Mobile Number
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.mobileCN}
          />
        </CCol>
        <CCol className="mb-3" md={4}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Office Number
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.officeCN}
          />
        </CCol>
        <CCol className="mb-3" md={4}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Home Number
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.homeCN}
          />
        </CCol>
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            For Nomination on Behalf of The Member
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.nominee}
          />
        </CCol>
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Relationship of Nominee
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.relationshipOfNominee}
          />
        </CCol>
      </div>
    </>
  );
};

export default PersonalDetailsSection;
