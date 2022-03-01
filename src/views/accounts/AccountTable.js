import React, { lazy, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CBadge,
  CPaginationItem,
  CPagination,
} from "@coreui/react";

const AccountTable = ({
  accounts,
  itemPerPage,
  maxPages,
  pageNumber,
  setPageNumber,
}) => {
  // State

  // Hooks
  const history = useHistory();

  // Functions
  const handlePageChangePrevious = () => {
    pageNumber == 1 ? 1 : setPageNumber(pageNumber - 1);
  };
  const handlePageChangeNext = () => {
    pageNumber == maxPages ? maxPages : setPageNumber(pageNumber + 1);
  };

  const PaginationPages = () => {
    const items = [];
    for (let i = 1; i <= maxPages; i++) {
      items.push(
        <CPaginationItem
          key={i}
          active={i === pageNumber}
          onClick={() => setPageNumber(i)}
        >
          {i}
        </CPaginationItem>
      );
    }
    return items;
  };
  return (
    <>
      <div className="shadow border-b border-gray-200 sm:rounded-lg bg-white p-4 mb-5">
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">Username</CTableHeaderCell>
              <CTableHeaderCell scope="col">Branch Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Issue Date</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status</CTableHeaderCell>
              <CTableHeaderCell scope="col"></CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {accounts.map((account, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{account.username}</CTableDataCell>
                <CTableDataCell>{account.branchName}</CTableDataCell>
                <CTableDataCell>{account.name}</CTableDataCell>
                <CTableDataCell>{account.email}</CTableDataCell>
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
        </CTable>
        {maxPages != 1 && (
          <div className="flex justify-end">
            <CPagination aria-label="Page navigation example" className="">
              <CPaginationItem
                disabled={pageNumber == 1}
                aria-label="Previous"
                onClick={handlePageChangePrevious}
              >
                <span aria-hidden="true">&laquo;</span>
              </CPaginationItem>
              {PaginationPages()}

              <CPaginationItem
                disabled={pageNumber == maxPages}
                aria-label="Next"
                onClick={handlePageChangeNext}
              >
                <span aria-hidden="true">&raquo;</span>
              </CPaginationItem>
            </CPagination>
          </div>
        )}
      </div>
    </>
  );
};

export default AccountTable;
