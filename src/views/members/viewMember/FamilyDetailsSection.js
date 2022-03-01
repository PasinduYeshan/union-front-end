import React from "react";

import {
  CFormLabel,
  CTableHeaderCell,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableRow,
  CCol,
} from "@coreui/react";

import { CustomCFormInputGroup } from "src/components/common/CustomCInputGroup";

const FamilyDetailsSection = ({ member }) => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-3">Family Details</h1>
      <div className="row g-3">
        <CustomCFormInputGroup
          label="Spouse's Name"
          name="spouseName"
          value={member.spouseName}
          uppercase={true}
          readOnly={true}
          required={false}
        />
        <CCol className="mb-3" xs={12}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Children's Details
          </CFormLabel>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                {/* <CTableHeaderCell scope="col">Date of Birth</CTableHeaderCell> */}
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {member.children.map((child, index) => (
                <CTableRow key={index}>
                  <CTableDataCell>{child.name}</CTableDataCell>
                  {/* <CTableDataCell>{child.dob}</CTableDataCell> */}
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCol>

        <CustomCFormInputGroup
          label="Father's Name"
          name="fatherName"
          value={member.fatherName}
          uppercase={true}
          readOnly={true}
          required={false}
        />
        <CustomCFormInputGroup
          label="Mother's Name"
          name="motherName"
          value={member.motherName}
          uppercase={true}
          readOnly={true}
          required={false}
        />
        <CustomCFormInputGroup
          label="Father in Law's Name"
          name="fatherInLawName"
          value={member.fatherInLawName}
          uppercase={true}
          readOnly={true}
          required={false}
          mdSize={6}
          required={false}
        />
        <CustomCFormInputGroup
          label="Mother in Law's Name"
          name="motherInLawName"
          value={member.motherInLawName}
          uppercase={true}
          readOnly={true}
          required={false}
          mdSize={6}
        />
      </div>
    </>
  );
};

export default FamilyDetailsSection;
