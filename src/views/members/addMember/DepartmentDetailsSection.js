import React from "react";

import { CustomCFormInputGroup } from "src/components/common/CustomCInputGroup";

const DepartmentDetailsSection = ({ formData, formErrors, handleChange }) => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-3">Departmental Details</h1>
      <div className="row g-3">
        <CustomCFormInputGroup
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          error={formErrors.title}
          uppercase={true}
        />
        <CustomCFormInputGroup
          label="Grade"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          error={formErrors.grade}
          uppercase={true}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="Date of Appointment"
          name="dateOfAppointment"
          value={formData.dateOfAppointment}
          onChange={handleChange}
          error={formErrors.dateOfAppointment}
          uppercase={true}
          mdSize={6}
          type="date"
        />
        <CustomCFormInputGroup
          label="Permanent WOrk Station"
          name="permanentWorkStation"
          value={formData.permanentWorkStation}
          onChange={handleChange}
          error={formErrors.permanentWorkStation}
          uppercase={true}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="Present Work Station"
          name="presentWorkStation"
          value={formData.presentWorkStation}
          onChange={handleChange}
          error={formErrors.presentWorkStation}
          uppercase={true}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="Date of Pension"
          name="dateOfPension"
          value={formData.dateOfPension}
          onChange={handleChange}
          error={formErrors.dateOfPension}
          uppercase={true}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="Office of the Regional Accountant"
          name="officeOfRegionalAccountant"
          value={formData.officeOfRegionalAccountant}
          onChange={handleChange}
          error={formErrors.officeOfRegionalAccountant}
          uppercase={true}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="Pay Sheet No"
          name="paySheetNo"
          value={formData.paySheetNo}
          onChange={handleChange}
          error={formErrors.paySheetNo}
          uppercase={true}
          mdSize={4}
        />
        <CustomCFormInputGroup
          label="Employee ID"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          error={formErrors.employeeId}
          uppercase={true}
          mdSize={4}
        />
        <CustomCFormInputGroup
          label="Office of the DPMG"
          name="officeOfDPMG"
          value={formData.officeOfDPMG}
          onChange={handleChange}
          error={formErrors.officeOfDPMG}
          uppercase={true}
          mdSize={4}
        />
      </div>
    </>
  );
};

export default DepartmentDetailsSection;
