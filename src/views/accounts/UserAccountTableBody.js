import React, {useState} from "react";
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

  const getAccountTypeLabel = (accountType) => {
    switch (accountType) {
      case "bsEditor":
        return ["Editor", "branch-secretary"];
      case "bsViewer":
        return ["Viewer", "branch-secretary"];
      case "adminEditor":
        return ["Editor", "admin"];
      case "adminViewer":
        return ["Viewer", "admin"];
      case "officer":
        return ["Officer", "officer"];
      default:
        return "";
    }
  };

  return (
    <>
      <CTableBody>
        {accounts.map((account, index) => (
          <CTableRow key={index}>
            <CTableDataCell>{account.branchName}</CTableDataCell>
            <CTableDataCell>{account.name}</CTableDataCell>
            <CTableDataCell>{account.email}</CTableDataCell>
            <CTableDataCell>
              {getAccountTypeLabel(account.accountType)[0]}
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
                  history.push({
                    pathname: `/office/accounts/${getAccountTypeLabel(account.accountType)[1]}/account`,
                    state: { userId: account.userId },
                  })
                }
              >
                <span className="text-sm"> View</span>
              </CButton>
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </>
  );
};

export default BSTableBody;
