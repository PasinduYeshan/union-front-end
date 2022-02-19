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

const IssueTable = () => {
  // State
  const maxPages = 4;
  const [pageNumber, setPageNumber] = useState(1);

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
              <CTableHeaderCell scope="col">Title</CTableHeaderCell>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Issue Date</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status</CTableHeaderCell>
              <CTableHeaderCell scope="col"></CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {issues.map((issue, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{issue.title}</CTableDataCell>
                <CTableDataCell>{issue.name}</CTableDataCell>
                <CTableDataCell>{issue.issueDate}</CTableDataCell>
                <CTableDataCell>
                  <CBadge
                    color={
                      issue.status == "Open"
                        ? "warning"
                        : issue.status == "Viewed"
                        ? "info"
                        : "success"
                    }
                  >
                    {issue.status}
                  </CBadge>
                </CTableDataCell>
                <CTableDataCell>
                  <CButton
                    color="info"
                    variant="outline"
                    onClick={() =>
                      history.push(`/office/issues/${issue.issueId}`)
                    }
                  >
                    View
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
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
      </div>
    </>
  );
};

export default IssueTable;

const issues = [
  {
    issueId: "ksdfjklsd3213",
    title: "Salary Problem",
    name: "John Doe",
    issueDate: "2020-01-01",
    status: "Open",
    telephone : "07898989898",
    description: "Salary should be increased",
  },
  {
    issueId: "ksdfjklsd3213",
    title: "Salary Problem",
    name: "John Doe",
    issueDate: "2020-01-01",
    status: "Open",
    telephone : "07898989898",
    description: "Salary should be increased",
  },
  {
    issueId: "ksdfjklsd3213",
    title: "Salary Problem",
    name: "John Doe",
    issueDate: "2020-01-01",
    status: "Open",
    telephone : "07898989898",
    description: "Salary should be increased",
  },
  {
    issueId: "ksdfjklsd3213",
    title: "Salary Problem",
    name: "John Doe",
    issueDate: "2020-01-01",
    status: "Viewed",
    telephone : "07898989898",
    description: "Salary should be increased",
  },
  {
    issueId: "ksdfjklsd3213",
    title: "Salary Problem",
    name: "John Doe",
    issueDate: "2020-01-01",
    status: "Open",
    telephone : "07898989898",
    description: "Salary should be increased",
  },
  {
    issueId: "ksdfjklsd3213",
    title: "Salary Problem",
    name: "John Doe",
    issueDate: "2020-01-01",
    status: "ActionTaken",
    telephone : "07898989898",
    description: "Salary should be increased",
  },
  {
    issueId: "ksdfjklsd3213",
    title: "Salary Problem",
    name: "John Doe",
    issueDate: "2020-01-01",
    status: "ActionTaken",
    telephone : "07898989898",
    description: "Salary should be increased",
  },
  {
    issueId: "ksdfjklsd3213",
    title: "Salary Problem",
    name: "John Doe",
    issueDate: "2020-01-01",
    status: "ActionTaken",
    telephone : "07898989898",
    description: "Salary should be increased",
  },
  {
    issueId: "ksdfjklsd3213",
    title: "Salary Problem",
    name: "John Doe",
    issueDate: "2020-01-01",
    status: "ActionTaken",
    telephone : "07898989898",
    description: "Salary should be increased",
  },
  {
    issueId: "ksdfjklsd3213",
    title: "Salary Problem",
    name: "John Doe",
    issueDate: "2020-01-01",
    status: "ActionTaken",
    telephone : "07898989898",
    description: "Salary should be increased",
  },
  {
    issueId: "ksdfjklsd3213",
    title: "Salary Problem",
    name: "John Doe",
    issueDate: "2020-01-01",
    status: "ActionTaken",
    telephone : "07898989898",
    description: "Salary should be increased",
  },
  {
    issueId: "ksdfjklsd3213",
    title: "Salary Problem",
    name: "John Doe",
    issueDate: "2020-01-01",
    status: "ActionTaken",
    telephone : "07898989898",
    description: "Salary should be increased",
  },
];
