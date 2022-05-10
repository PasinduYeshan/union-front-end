import React from "react";
import { CustomCFormInputGroup } from "src/components/common/CustomCInputGroup";

const DepartmentDetailsSection = ({
  member,
  formErrors,
  onChange,
  onAddBtnPressed,
  onChildRemoveBtnPressed,
  readOnly,
}) => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-3">Departmental Details</h1>
      <div className="row g-3">
        {CustomCFormInputGroup({
          label: "Title",
          name: "title",
          value: member.title,
          onChange: onChange,
          error: formErrors.title,
          uppercase: true,
          required: false,
          readOnly: readOnly,
        })}
        {CustomCFormInputGroup({
          label: "Grade",
          name: "grade",
          value: member.grade,
          onChange: onChange,
          error: formErrors.grade,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 6,
        })}
        {CustomCFormInputGroup({
          label: "Date of Appointment",
          name: "dateOfAppointment",
          value: member.dateOfAppointment,
          onChange: onChange,
          error: formErrors.dateOfAppointment,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 6,
          type: "date",
        })}
        {CustomCFormInputGroup({
          label: "Permanent Work Station",
          name: "permanentWorkStation",
          value: member.permanentWorkStation,
          onChange: onChange,
          error: formErrors.permanentWorkStation,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 6,
        })}
        {CustomCFormInputGroup({
          label: "Present Work Station",
          name: "presentWorkStation",
          value: member.presentWorkStation,
          onChange: onChange,
          error: formErrors.presentWorkStation,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 6,
        })}
        {CustomCFormInputGroup({
          label: "Date of Pension",
          name: "dateOfPension",
          value: member.dateOfPension,
          onChange: onChange,
          error: formErrors.dateOfPension,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 6,
          type: "date",
        })}
        {CustomCFormInputGroup({
          label: "Office of The Regional Accountant",
          name: "officeOfRegionalAccountant",
          value: member.officeOfRegionalAccountant,
          onChange: onChange,
          error: formErrors.officeOfRegionalAccountant,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 6,
        })}
        {CustomCFormInputGroup({
          label: "Pay Sheet No",
          name: "paySheetNo",
          value: member.paySheetNo,
          onChange: onChange,
          error: formErrors.paySheetNo,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 4,
        })}
        {CustomCFormInputGroup({
          label: "Employee ID",
          name: "employeeId",
          value: member.employeeId,
          onChange: onChange,
          error: formErrors.employeeId,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 4,
        })}
        {CustomCFormInputGroup({
          label: "Office of The DPMG",
          name: "officeOfDPMG",
          value: member.officeOfDPMG,
          onChange: onChange,
          error: formErrors.officeOfDPMG,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 4,
        })}
      </div>
    </>
  );
};

export default DepartmentDetailsSection;
