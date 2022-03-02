import React from "react";

import {
  CButton,
  CTableBody,
  CTableDataCell,
  CTableRow,
  CBadge,
} from "@coreui/react";

const BSTableBody = ({ accounts }) => {
  return (
    <>
      <CTableBody>
        {accounts.map((account, index) => (
          <CTableRow key={index}>
            <CTableDataCell>{account.branchName}</CTableDataCell>
            <CTableDataCell>{account.name}</CTableDataCell>
            <CTableDataCell>{account.email}</CTableDataCell>
            <CTableDataCell>
              {account.accountType == "bsEditor"
                ? "Editor"
                : account.accountType == "bsViewer"
                ? "Viewer"
                : ""}
            </CTableDataCell>
            <CTableDataCell>
              <CBadge color={account.status ? "success" : "warning"}>
                {account.status ? "Active" : "Inactive"}
              </CBadge>
            </CTableDataCell>
            <CTableDataCell>
              <CButton
                color="info"
                variant="outline"
                onClick={() =>
                  history.push(`/office/accounts/${account.userId}`)
                }
              >
                Edit
              </CButton>
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </>
  );
};

export default BSTableBody;