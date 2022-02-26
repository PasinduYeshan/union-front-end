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

const FamilyDetailsSection = ({ member }) => {
  return (
    <>
      <div >
        <CCol className="mb-3" xs={12}>
          <CFormLabel htmlFor="exampleFormControlInput1">
            Spouse's Name
          </CFormLabel>
          <CFormInput
            className="bg-white border-bottom"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.spouseName}
          />
        </CCol>
        <CCol className="mb-3" xs={12}>
          <CFormLabel htmlFor="exampleFormControlInput1">
            Children Details
          </CFormLabel>
          {/* <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.nameWithInitials}
          /> */}
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Date of Birth</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {member.children.map((child, index) => (
                <CTableRow key={index}>
                  <CTableDataCell>{child.name}</CTableDataCell>
                  <CTableDataCell>{child.dob}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCol>
        <CCol className="mb-3" xs={12}>
          <CFormLabel htmlFor="exampleFormControlInput1">
            Father's Name
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.fatherName}
          />
        </CCol>
        <CCol className="mb-3" xs={12}>
          <CFormLabel htmlFor="exampleFormControlInput1">
            Mother's Name
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.motherName}
          />
        </CCol>
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1">
            Father in Law's Name
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.fatherInLawName}
          />
        </CCol>
        <CCol className="mb-3" md={6}>
          <CFormLabel htmlFor="exampleFormControlInput1">
            Mother in Law's Name
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.motherInLawName}
          />
        </CCol>
      </div>
    </>
  );
};

export default FamilyDetailsSection;