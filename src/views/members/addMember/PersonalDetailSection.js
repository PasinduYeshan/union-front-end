import React from "react";

// Custom input group
import {
  CustomCFormSelectGroup,
  CustomCFormInputGroup,
} from "src/components/common/CustomCInputGroup";

const PersonalDetailsSection = ({
  formData,
  handleChange,
  formErrors,
}) => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-3">Personal Details</h1>
      <div className="row g-3">
        <CustomCFormInputGroup
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={formErrors.fullName}
          uppercase={true}
        />
        <CustomCFormInputGroup
          label="Name With Initials"
          name="nameWithInitials"
          value={formData.nameWithInitials}
          onChange={handleChange}
          error={formErrors.nameWithInitials}
          uppercase={true}
        />
        <CustomCFormInputGroup
          label="Other Name"
          name="otherName"
          value={formData.otherName}
          onChange={handleChange}
          error={formErrors.otherName}
          uppercase={true}
          required={false}
        />
        <CustomCFormInputGroup
          label="Old NIC"
          name="oldNIC"
          value={formData.oldNIC}
          onChange={handleChange}
          error={formErrors.oldNIC}
          uppercase={true}
          required={false}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="New NIC"
          name="newNIC"
          value={formData.newNIC}
          onChange={handleChange}
          error={formErrors.newNIC}
          uppercase={true}
          required={false}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="Date of Birth"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
          error={formErrors.dob}
          uppercase={true}
          mdSize={6}
        />
        <CustomCFormSelectGroup
          label="Sex"
          name="sex"
          value={formData.sex}
          onChange={handleChange}
          error={formErrors.sex}
          uppercase={true}
          mdSize={6}
          options={[
            { label: "Male", value: "Male" },
            {label : "Female", value: "Female"}
          ]}
        />
        <CustomCFormInputGroup
          label="Permanent Address"
          name="permanentAddress"
          value={formData.permanentAddress}
          onChange={handleChange}
          error={formErrors.permanentAddress}
          uppercase={true}
          required={true}
        />
        <CustomCFormInputGroup
          label="Mailing Address"
          name="mailingAddress"
          value={formData.mailingAddress}
          onChange={handleChange}
          error={formErrors.mailingAddress}
          uppercase={true}
          required={true}
        />
        <CustomCFormInputGroup
          label="Email Address"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          error={formErrors.emailAddress}
          uppercase={true}
          required={false}
          mdSize={6}
        />
        <CustomCFormSelectGroup
          label="Civil Status"
          name="civilStatus"
          value={formData.civilStatus}
          onChange={handleChange}
          error={formErrors.civilStatus}
          uppercase={true}
          mdSize={6}
          options={[
            { label: "Single", value: "Single" },
            {label : "Married", value: "Married"},
            {label : "Seperated/Divorced", value: "Seperated/Divorced"},
            {label : "Widow/Widower", value: "Widow/Widower"},
          ]}
        />
        <CustomCFormInputGroup
          label="Mobile Number"
          name="mobileCN"
          value={formData.mobileCN}
          onChange={handleChange}
          error={formErrors.mobileCN}
          uppercase={true}
          required={false}
          mdSize={4}
        />
        <CustomCFormInputGroup
          label="Office Number"
          name="officeCN"
          value={formData.officeCN}
          onChange={handleChange}
          error={formErrors.officeCN}
          uppercase={true}
          required={false}
          mdSize={4}
        />
        <CustomCFormInputGroup
          label="Home Number"
          name="homeCN"
          value={formData.homeCN}
          onChange={handleChange}
          error={formErrors.homeCN}
          uppercase={true}
          required={false}
          mdSize={4}
        />

        <CustomCFormInputGroup
          label="FOR NOMINATION ON BEHALF OF THE MEMBER"
          name="nominee"
          value={formData.nominee}
          onChange={handleChange}
          error={formErrors.nominee}
          uppercase={true}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="Relationship of Nominee"
          name="relationshipOfNominee"
          value={formData.relationshipOfNominee}
          onChange={handleChange}
          error={formErrors.relationshipOfNominee}
          uppercase={true}
          mdSize={6}
        />
      </div>
    </>
  );
};

export default PersonalDetailsSection;
