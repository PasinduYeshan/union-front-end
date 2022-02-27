import React from "react";

import {
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CBadge,
  CTableHeaderCell,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeader,
  CTableRow,
  CCol,
} from "@coreui/react";

const MemberDetailsSection = ({ member }) => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-3">Member Details</h1>
      <div className="row g-3">
        <CCol className="mb-3" md={4}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Membership Number
          </CFormLabel>
          <CFormInput
            className="bg-white border-bottom"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
        <CCol className="mb-3" md={4}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Date of Membership
          </CFormLabel>
          <CFormInput
            className="bg-white"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
        <CCol className="mb-3" md={4}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            RDS Number
          </CFormLabel>
          <CFormInput
            className="bg-white"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
        <CCol className="mb-3" md={12}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Are you a member of any other union?
          </CFormLabel>
          <CFormInput
            className="bg-white"
            type="text"
            id="exampleFormControlInput1"
          />
        </CCol>
        {member.memberOfOtherUnion === "Yes" && (
          <CCol className="mb-3" md={12}>
            <CFormLabel
              htmlFor="exampleFormControlInput1"
              className="uppercase"
            >
              Other Unions
            </CFormLabel>
          </CCol>
        )}
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Name of the branch
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

export default MemberDetailsSection;
