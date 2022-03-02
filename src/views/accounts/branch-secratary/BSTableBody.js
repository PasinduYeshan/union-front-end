import React from "react";
import { useHistory } from "react-router-dom";

import {
  CButton,
  CTableBody,
  CTableDataCell,
  CTableRow,
  CBadge,
} from "@coreui/react";

const BSTableBody = ({ accounts }) => {
  const history = useHistory();
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
              <CBadge
                color={account.status == "Active" ? "success" : "warning"}
              >
                {account.status}
              </CBadge>
            </CTableDataCell>
            <CTableDataCell>
              <CButton
                color="info"
                variant="outline"
                onClick={() =>
                  history.push(
                    `/office/accounts/branch-secratary/${account.userId}`
                  )
                }
              >
                <span className="text-sm"> Edit</span>
              </CButton>
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </>
  );
};

export default BSTableBody;
