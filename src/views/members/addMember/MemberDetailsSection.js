import React from "react";

import {
  CTableHeaderCell,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableRow,
  CButton,
} from "@coreui/react";

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
          onAddInputBtnPressed={(e) =>
            handleAddBtnPressed({ e, tempFieldName: "unionName" })
          }
          addListName="otherUnions"
          required={false}
          addBtnLabel="Add Union Name"
        />
        {formData.otherUnions.length > 0 && (
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                <CTableHeaderCell scope="col"></CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {formData["otherUnions"].map((child, index) => (
                <CTableRow key={index}>
                  <CTableDataCell>{child.name}</CTableDataCell>
                  <CTableDataCell>
                    <CButton
                      color="danger"
                      variant="ghost"
                      name="childrenRemoveBtn"
                      onClick={(_) =>
                        handleChildRemoveBtnPressed({
                          child,
                          listName: "otherUnions",
                        })
                      }
                    >
                      Remove
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        )}
        <CustomCFormInputGroup
          label="Name of the branch"
          name="branchName"
          value={formData.branchName}
          onChange={handleChange}
          error={formErrors.branchName}
          uppercase={true}
          mdSize={6}
        />
      </div>
    </>
  );
};

export default MemberDetailsSection;
