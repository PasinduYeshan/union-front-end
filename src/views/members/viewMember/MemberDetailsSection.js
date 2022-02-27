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
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.membershipNo}
          />
        </CCol>
        <CCol className="mb-3" md={4}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Date of Membership
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.dateOfMembership}
          />
        </CCol>
        <CCol className="mb-3" md={4}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            RDS Number
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.RDSNumber}
          />
        </CCol>
        <CCol className="mb-3" md={12}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Are you a member of any other union?
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.memberOfOtherUnion}
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
            <CTable hover borderless small align="middle" responsive>
              {/* <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col"></CTableHeaderCell>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              </CTableRow>
            </CTableHead> */}
              <CTableBody>
                {member.namesOfOtherUnions.map((child, index) => (
                  <CTableRow key={index} className="justify-start">
                    <CTableDataCell>{index + 1})</CTableDataCell>
                    <CTableDataCell>{child}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCol>
        )}
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Name of the branch
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.branchName}
          />
        </CCol>
      </div>
    </>
  );
};

export default MemberDetailsSection;
