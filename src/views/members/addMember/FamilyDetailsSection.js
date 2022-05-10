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
} from "src/components/common/CustomCInputGroup";

const FamilyDetailsSection = ({
  formData,
  handleChange,
  formErrors,
  handleAddBtnPressed,
  handleChildRemoveBtnPressed,
}) => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-3">Family Details</h1>
      <div className="row g-3">
        <CustomCFormInputGroup
          label="Spouse's Name"
          name="spouseName"
          value={formData.spouseName}
          onChange={handleChange}
          error={formErrors.spouseName}
          uppercase={true}
          required={false}
        />
        <CustomCFormAddInputGroup
          label="Children's Name"
          name="childName"
          value={formData.childName}
          onChange={handleChange}
          error={formErrors.childName}
          uppercase={true}
          onAddInputBtnPressed={handleAddBtnPressed}
          handleChildRemoveBtnPressed={handleChildRemoveBtnPressed}
          addListName="children"
          list={formData.children}
          required={false}
        />
        {/* {formData.children.length > 0 && (
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                <CTableHeaderCell scope="col"></CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {formData["children"].map((child, index) => (
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
                          listName: "children",
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
        )} */}

        <CustomCFormInputGroup
          label="Father's Name"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          error={formErrors.fatherName}
          uppercase={true}
          required={false}
        />
        <CustomCFormInputGroup
          label="Mother's Name"
          name="motherName"
          value={formData.motherName}
          onChange={handleChange}
          error={formErrors.motherName}
          uppercase={true}
          required={false}
        />
        <CustomCFormInputGroup
          label="Father in Law's Name"
          name="fatherInLawName"
          value={formData.fatherInLawName}
          onChange={handleChange}
          error={formErrors.fatherInLawName}
          uppercase={true}
          mdSize={6}
          required={false}
        />
        <CustomCFormInputGroup
          label="Mother in Law's Name"
          name="motherInLawName"
          value={formData.motherInLawName}
          onChange={handleChange}
          error={formErrors.motherInLawName}
          uppercase={true}
          mdSize={6}
          required={false}
        />
      </div>
    </>
  );
};

export default FamilyDetailsSection;
