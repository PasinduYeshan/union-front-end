import React from "react";

import {
  CFormLabel,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableRow,
  CCol,
} from "@coreui/react";

import { CustomCFormInputGroup } from "src/components/common/CustomCInputGroup";

const MemberDetailsSection = ({ member }) => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-3">Member Details</h1>
      <div className="row g-3">
        <CustomCFormInputGroup
          label="Membership Number"
          name="membershipNo"
          value={member.membershipNo}
          readOnly={true}
          required={false}
          mdSize={4}
        />
        <CustomCFormInputGroup
          label="Date of Membership"
          name="dateOfMembership"
          value={member.dateOfMembership}
          readOnly={true}
          required={false}
          mdSize={4}
        />
        <CustomCFormInputGroup
          label="RDS Number"
          name="RDSNumber"
          value={member.RDSNumber}
          readOnly={true}
          required={false}
          mdSize={4}
        />
        <CustomCFormInputGroup
          label="Are you a member of any other union?"
          name="memberOfOtherUnion"
          value={member.memberOfOtherUnion}
          readOnly={true}
          required={false}
          mdSize={6}
        />
        {member.memberOfOtherUnion === "Yes" && (
          <CCol className="mb-3" md={12}>
            <CFormLabel
              htmlFor="exampleFormControlInput1"
              className="uppercase"
            >
              Other Unions
            </CFormLabel>
            <CTable hover borderless small align="middle" responsive>
              {/* <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col"></CTableHeaderCell>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              </CTableRow>
            </CTableHead> */}
              <CTableBody>
                {member.namesOfOtherUnions.map((child, index) => (
                  <CTableRow key={index} className="justify-start">
                    <CTableDataCell>{index + 1})</CTableDataCell>
                    <CTableDataCell>{child}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCol>
        )}

        <CustomCFormInputGroup
          label="Name of the branch"
          name="branchName"
          value={member.branchName}
          readOnly={true}
          required={false}
          mdSize={6}
        />
      </div>
    </>
  );
};

export default MemberDetailsSection;
