import React from "react";

import { CustomCFormInputGroup } from "src/components/common/CustomCInputGroup";
import {convertTZ} from "src/utils/function";

const PersonalDetailsSection = ({
  member,
  formErrors,
  onChange,
  onAddBtnPressed,
  onChildRemoveBtnPressed,
  readOnly,
}) => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-3">Personal Details</h1>
      <div className="row g-3">
        {CustomCFormInputGroup({
          label: "Full Name",
          name: "fullName",
          value: member.fullName,
          onChange: onChange,
          error: formErrors.fullName,
          uppercase: true,
          required: false,
          readOnly: readOnly,
        })}
        {CustomCFormInputGroup({
          label: "Name with Initials",
          name: "nameWithInitials",
          value: member.nameWithInitials,
          onChange: onChange,
          error: formErrors.nameWithInitials,
          uppercase: true,
          required: false,
          readOnly: readOnly,
        })}
        {CustomCFormInputGroup({
          label: "Other Name",
          name: "otherName",
          value: member.otherName,
          onChange: onChange,
          error: formErrors.otherName,
          uppercase: true,
          required: false,
          readOnly: readOnly,
        })}
        {CustomCFormInputGroup({
          label: "Old NIC",
          name: "oldNIC",
          value: member.oldNIC,
          onChange: onChange,
          error: formErrors.oldNIC,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 6,
        })}
        {CustomCFormInputGroup({
          label: "New NIC",
          name: "newNIC",
          value: member.newNIC,
          onChange: onChange,
          error: formErrors.newNIC,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 6,
        })}
        {CustomCFormInputGroup({
          label: "Date of Birth",
          name: "dob",
          value: readOnly ? (member.dob ? convertTZ(member.dob) : "") : member.dob,
          onChange: onChange,
          error: formErrors.dob,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 6,
          type: "date",
        })}
        {CustomCFormInputGroup({
          label: "Sex",
          name: "sex",
          value: member.sex,
          onChange: onChange,
          error: formErrors.sex,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 6,
        })}
        {CustomCFormInputGroup({
          label: "Permanent Address",
          name: "permanentAddress",
          value: member.permanentAddress,
          onChange: onChange,
          error: formErrors.permanentAddress,
          uppercase: true,
          required: false,
          readOnly: readOnly,
        })}
        {CustomCFormInputGroup({
          label: "Mailing Address",
          name: "mailingAddress",
          value: member.mailingAddress,
          onChange: onChange,
          error: formErrors.mailingAddress,
          uppercase: true,
          required: false,
          readOnly: readOnly,
        })}
        {CustomCFormInputGroup({
          label: "Email Address",
          name: "emailAddress",
          value: member.emailAddress,
          onChange: onChange,
          error: formErrors.emailAddress,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 6,
        })}
        {CustomCFormInputGroup({
          label: "Civil Status",
          name: "civilStatus",
          value: member.civilStatus,
          onChange: onChange,
          error: formErrors.civilStatus,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 6,
        })}
        {CustomCFormInputGroup({
          label: "Mobile Number",
          name: "mobileCN",
          value: member.mobileCN,
          onChange: onChange,
          error: formErrors.mobileCN,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 4,
        })}
        {CustomCFormInputGroup({
          label: "Office Number",
          name: "officeCN",
          value: member.officeCN,
          onChange: onChange,
          error: formErrors.officeCN,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 4,
        })}
        {CustomCFormInputGroup({
          label: "Home Number",
          name: "homeCN",
          value: member.homeCN,
          onChange: onChange,
          error: formErrors.homeCN,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 4,
        })}
        {CustomCFormInputGroup({
          label: "FOR NOMINATION ON BEHALF OF THE MEMBER",
          name: "nominee",
          value: member.nominee,
          onChange: onChange,
          error: formErrors.nominee,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 6,
        })}
        {CustomCFormInputGroup({
          label: "Relationship of Nominee",
          name: "relationshipOfNominee",
          value: member.relationshipOfNominee,
          onChange: onChange,
          error: formErrors.relationshipOfNominee,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 6,
        })}
      </div>
    </>
  );
};

export default PersonalDetailsSection;
