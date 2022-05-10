import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CFormLabel,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableRow,
  CCol,
} from "@coreui/react";

import { thunks, selectors } from "src/store";

import {
  CustomCFormInputGroup,
  CustomCFormAddInputGroup,
  CustomCFormSelectGroup,
} from "src/components/common/CustomCInputGroup";

const MemberDetailsSection = ({
  member,
  formErrors,
  onChange,
  onAddBtnPressed,
  onChildRemoveBtnPressed,
  readOnly,
}) => {
  const dispatch = useDispatch();
  const branchNameOptions = useSelector(selectors.meta.selectBranchNameOptions);

  // Fetch branch names from server
  useEffect(() => {
    dispatch(thunks.meta.getBranches());
  }, []);

  return (
    <>
      <h1 className="text-xl font-semibold mb-3">Member Details</h1>
      <div className="row g-3">
        {CustomCFormInputGroup({
          label: "Membership Number",
          name: "membershipNo",
          value: member.membershipNo,
          onChange: onChange,
          error: formErrors.membershipNo,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 4,
        })}
        {CustomCFormInputGroup({
          label: "Date of Membership",
          name: "dateOfMembership",
          value: member.dateOfMembership,
          onChange: onChange,
          error: formErrors.dateOfMembership,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 4,
        })}
        {CustomCFormInputGroup({
          label: "RDS Number",
          name: "RDSNumber",
          value: member.RDSNumber,
          onChange: onChange,
          error: formErrors.RDSNumber,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 4,
        })}
        {CustomCFormSelectGroup({
          label: "Are you a member of any other union?",
          name: "memberOfOtherUnion",
          value: member.memberOfOtherUnion,
          onChange: onChange,
          error: formErrors.memberOfOtherUnion,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 6,
          options: [
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" },
          ],
        })}

        {member.memberOfOtherUnion === "Yes" &&
          CustomCFormAddInputGroup({
            label: "Other Unions",
            name: "unionName",
            value: member.unionName,
            onChange: onChange,
            error: formErrors.unionName,
            uppercase: true,
            required: false,
            readOnly: readOnly,
            addListName: "otherUnions",
            list: member.otherUnions,
            onAddInputBtnPressed: onAddBtnPressed,
            handleChildRemoveBtnPressed: onChildRemoveBtnPressed,
          })}

        {CustomCFormSelectGroup({
          label: "Branch Name",
          name: "branchName",
          value: member.branchName,
          onChange: onChange,
          error: formErrors.branchName,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          mdSize: 6,
          options: branchNameOptions,
        })}
      </div>
    </>
  );
};

export default MemberDetailsSection;
