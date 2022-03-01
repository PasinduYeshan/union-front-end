import React from "react";

import { CustomCFormInputGroup } from "src/components/common/CustomCInputGroup";

const PersonalDetailsSection = ({ member }) => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-3">Personal Details</h1>
      <div className="row g-3">
        <CustomCFormInputGroup
          label="Full Name"
          name="fullName"
          value={member.fullName}
          uppercase={true}
          readOnly={true}
          required={false}
        />
        <CustomCFormInputGroup
          label="Name With Initials"
          name="nameWithInitials"
          value={member.nameWithInitials}
          uppercase={true}
          readOnly={true}
          required={false}
        />
        <CustomCFormInputGroup
          label="Other Name"
          name="otherName"
          value={member.otherName}
          uppercase={true}
          readOnly={true}
          required={false}
        />
        <CustomCFormInputGroup
          label="Old NIC"
          name="oldNIC"
          value={member.oldNIC}
          uppercase={true}
          readOnly={true}
          required={false}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="New NIC"
          name="newNIC"
          value={member.newNIC}
          uppercase={true}
          readOnly={true}
          required={false}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="Date of Birth"
          name="dob"
          type="date"
          value={member.dob}
          uppercase={true}
          readOnly={true}
          required={false}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="Sex"
          name="sex"
          value={member.sex}
          uppercase={true}
          readOnly={true}
          required={false}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="Permanent Address"
          name="permanentAddress"
          value={member.permanentAddress}
          uppercase={true}
          readOnly={true}
          required={false}
        />
        <CustomCFormInputGroup
          label="Mailing Address"
          name="mailingAddress"
          value={member.mailingAddress}
          uppercase={true}
          readOnly={true}
          required={false}
        />
        <CustomCFormInputGroup
          label="Email Address"
          name="emailAddress"
          value={member.emailAddress}
          uppercase={true}
          readOnly={true}
          required={false}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="Civil Status"
          name="civilStatus"
          value={member.civilStatus}
          uppercase={true}
          readOnly={true}
          required={false}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="Mobile Number"
          name="mobileCN"
          value={member.mobileCN}
          uppercase={true}
          readOnly={true}
          required={false}
          mdSize={4}
        />
        <CustomCFormInputGroup
          label="Office Number"
          name="officeCN"
          value={member.officeCN}
          uppercase={true}
          readOnly={true}
          required={false}
          mdSize={4}
        />
        <CustomCFormInputGroup
          label="Home Number"
          name="homeCN"
          value={member.homeCN}
          uppercase={true}
          readOnly={true}
          required={false}
          mdSize={4}
        />

        <CustomCFormInputGroup
          label="FOR NOMINATION ON BEHALF OF THE MEMBER"
          name="nominee"
          value={member.nominee}
          uppercase={true}
          readOnly={true}
          required={false}
          mdSize={6}
        />
        <CustomCFormInputGroup
          label="Relationship of Nominee"
          name="relationshipOfNominee"
          value={member.relationshipOfNominee}
          uppercase={true}
          readOnly={true}
          required={false}
          mdSize={6}
        />
      </div>
    </>
  );
};

export default PersonalDetailsSection;
