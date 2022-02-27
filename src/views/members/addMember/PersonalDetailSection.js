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
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Full Name
          </CFormLabel>
          <CFormInput
            className="bg-white"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
        <CCol className="mb-3" xs={12}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Name With Initials
          </CFormLabel>
          <CFormInput
            className="bg-white"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
        <CCol className="mb-3" xs={12}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Other Name
          </CFormLabel>
          <CFormInput
            className="bg-white"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Old NIC No
          </CFormLabel>
          <CFormInput
            className="bg-white"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            New NIC No
          </CFormLabel>
          <CFormInput
            className="bg-white"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Date of Birth
          </CFormLabel>
          <CFormInput
            className="bg-white"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Sex
          </CFormLabel>
          <CFormInput
            className="bg-white"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
        <CCol className="mb-3" xs={12}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Permanent Address
          </CFormLabel>
          <CFormInput
            className="bg-white"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
        <CCol className="mb-3" xs={12}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Mailing Address
          </CFormLabel>
          <CFormInput
            className="bg-white"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Email Address
          </CFormLabel>
          <CFormInput
            className="bg-white"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Civil Status
          </CFormLabel>
          <CFormInput
            className="bg-white"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
        <CCol className="mb-3" md={4}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Mobile Number
          </CFormLabel>
          <CFormInput
            className="bg-white"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
        <CCol className="mb-3" md={4}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Office Number
          </CFormLabel>
          <CFormInput
            className="bg-white"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
        <CCol className="mb-3" md={4}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Home Number
          </CFormLabel>
          <CFormInput
            className="bg-white"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            For Nomination on Behalf of The Member
          </CFormLabel>
          <CFormInput
            className="bg-white"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Relationship of Nominee
          </CFormLabel>
          <CFormInput
            className="bg-white"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
      </div>
    </>
  );
};

export default PersonalDetailsSection;
