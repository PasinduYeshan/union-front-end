import React from "react";
import { useSelector } from "react-redux";

import {
  CTableHeaderCell,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableRow,
  CButton,
} from "@coreui/react";

import { selectors } from "src/store";

import {
  CustomCFormAddInputGroup,
  CustomCFormInputGroup,
  CustomCFormSelectGroup,
} from "src/components/common/CustomCInputGroup";

const MemberDetailsSection = ({
  formData,
  formErrors,
  handleChange,
  handleAddBtnPressed,
  handleChildRemoveBtnPressed,
}) => {
  const branchNameOptions = useSelector(selectors.meta.selectBranchNameOptions);
  return (
    <>
      <h1 className="text-xl font-semibold mb-3">Member Details</h1>
      <div className="row g-3">
        <CustomCFormInputGroup
          label="Membership Number"
          name="membershipNo"
          value={formData.membershipNo}
          onChange={handleChange}
          error={formErrors.membershipNo}
          uppercase={true}
          mdSize={4}
        />
        <CustomCFormInputGroup
          label="Date of Membership"
          name="dateOfMembership"
          value={formData.dateOfMembership}
          onChange={handleChange}
          error={formErrors.dateOfMembership}
          uppercase={true}
          mdSize={4}
          type="date"
        />
        <CustomCFormInputGroup
          label="RDS Number"
          name="RDSNumber"
          value={formData.RDSNumber}
          onChange={handleChange}
          error={formErrors.RDSNumber}
          uppercase={true}
          mdSize={4}
        />
        <CustomCFormSelectGroup
          label="Are you a member of any other union?"
          name="memberOfOtherUnion"
          value={formData.memberOfOtherUnion}
          onChange={handleChange}
          error={formErrors.memberOfOtherUnion}
          uppercase={true}
          mdSize={6}
          options={[
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" },
          ]}
        />
        <CustomCFormAddInputGroup
          label="Other Union Names"
          name="unionName"
          value={formData.unionName}
          onChange={handleChange}
          error={formErrors.unionName}
          uppercase={true}
          onAddInputBtnPressed={handleAddBtnPressed}
          handleChildRemoveBtnPressed={handleChildRemoveBtnPressed}
          addListName="otherUnions"
          list={formData.otherUnions}
          required={false}
          addBtnLabel="Add Union Name"
        />

        <CustomCFormSelectGroup
          label="Name of the branch"
          name="branchName"
          value={formData.branchName}
          onChange={handleChange}
          error={formErrors.branchName}
          uppercase={true}
          mdSize={6}
          options={branchNameOptions}
        />
      </div>
    </>
  );
};

export default MemberDetailsSection;
