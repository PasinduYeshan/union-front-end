import React from "react";
import { CustomCFormInputGroup } from "src/components/common/CustomCInputGroup";

const DepartmentDetailsSection = ({ member }) => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-3">Departmental Details</h1>
      <div className="row g-3">
        <CustomCFormInputGroup
          label="Title"
          name="title"
          value={member.title}
          uppercase={true}
          readOnly={true}
          required={false}
        />
        <CustomCFormInputGroup
          label="Grade"
          name="grade"
          value={member.grade}
          readOnly={true}
          required={false}
          uppercase={true}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="Date of Appointment"
          name="dateOfAppointment"
          value={member.dateOfAppointment}
          readOnly={true}
          required={false}
          uppercase={true}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="Permanent WOrk Station"
          name="permanentWorkStation"
          value={member.permanentWorkStation}
          readOnly={true}
          required={false}
          uppercase={true}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="Present Work Station"
          name="prsentWorkStation"
          value={member.presentWorkStation}
          readOnly={true}
          required={false}
          uppercase={true}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="Date of Pension"
          name="dateOfPension"
          value={member.dateOfPension}
          readOnly={true}
          required={false}
          uppercase={true}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="Office of the Regional Accountant"
          name="officeOfRegionalAccountant"
          value={member.officeOfRegionalAccountant}
          readOnly={true}
          required={false}
          uppercase={true}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="Pay Sheet No"
          name="paySheetNo"
          value={member.paySheetNo}
          readOnly={true}
          required={false}
          uppercase={true}
          mdSize={4}
        />
        <CustomCFormInputGroup
          label="Employee ID"
          name="employeeId"
          value={member.employeeId}
          readOnly={true}
          required={false}
          uppercase={true}
          mdSize={4}
        />
        <CustomCFormInputGroup
          label="Office of the DPMG"
          name="officeOfDPMG"
          value={member.officeOfDPMG}
          readOnly={true}
          required={false}
          uppercase={true}
          mdSize={4}
        />
      </div>
    </>
  );
};

export default DepartmentDetailsSection;
