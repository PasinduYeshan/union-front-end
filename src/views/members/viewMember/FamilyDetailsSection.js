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

import { convertTZ } from "src/utils/function";

import {
  CustomCFormInputGroup,
  CustomCFormAddInputGroup,
} from "src/components/common/CustomCInputGroup";

const FamilyDetailsSection = ({
  member,
  formErrors,
  onChange,
  onAddBtnPressed,
  onChildRemoveBtnPressed,
  readOnly,
}) => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-3">Family Details</h1>
      <div className="row g-3">
        {CustomCFormInputGroup({
          label: "Spouse's Name",
          name: "spouseName",
          value: member.spouseName,
          onChange: onChange,
          error: formErrors.spouseName,
          uppercase: true,
          required: false,
          readOnly: readOnly,
        })}
        {CustomCFormAddInputGroup({
          label: "Children's Details",
          name: "childName",
          value: member.childName,
          onChange: onChange,
          error: formErrors.childName,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          addListName: "children",
          list: member.children,
          onAddInputBtnPressed: onAddBtnPressed,
          handleChildRemoveBtnPressed: onChildRemoveBtnPressed,
        })}
        {CustomCFormInputGroup({
          label: "Father's Name",
          name: "fatherName",
          value: member.fatherName,
          onChange: onChange,
          error: formErrors.fatherName,
          uppercase: true,
          required: false,
          readOnly: readOnly,
        })}
        {CustomCFormInputGroup({
          label: "Mother's Name",
          name: "motherName",
          value: member.motherName,
          onChange: onChange,
          error: formErrors.motherName,
          uppercase: true,
          required: false,
          readOnly: readOnly,
        })}
        {CustomCFormInputGroup({
          label: "Father in Law's Name",
          name: "fatherInLawName",
          value: member.fatherInLawName,
          onChange: onChange,
          error: formErrors.fatherInLawName,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 6,
        })}
        {CustomCFormInputGroup({
          label: "Mother in Law's Name",
          name: "motherInLawName",
          value: member.motherInLawName,
          onChange: onChange,
          error: formErrors.motherInLawName,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 6,
        })}
      </div>
    </>
  );
};

export default FamilyDetailsSection;
