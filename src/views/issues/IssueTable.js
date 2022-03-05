import React, { lazy, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  CButton,
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

import { deleteEmptyKeys } from "src/utils/function";
import FilterTable from "./FilterTable";

const IssueTable = () => {
  // State
  const maxPages = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [filteredData, setFilteredData] = useState(issuesData);
  const [issues, setIssues] = useState(issuesData);
  // Handle filter
  const [filterData, setFilterData] = useState({
    branchName: "",
    status: "",
  });
  const [filterErrors, setFilterErrors] = useState({});

  // Handle filter
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const filters = deleteEmptyKeys(filterData);
    const filteredValues = issues.filter((account) => {
      for (let key in filters) {
        console.log(key, filters[key], account[key]);
        if (filters[key].toLowerCase() != account[key].toLowerCase())
          return false;
      }
      return true;
    });
    setFilteredData(filteredValues);
  };

  const handleClearFilter = () => {
    setFilterData({});
    setFilteredData(issues);
  };

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
        <FilterTable
          filterData={filterData}
          filterErrors={filterErrors}
          handleFilterChange={handleFilterChange}
          handleFilterSubmit={handleFilterSubmit}
          handleClearFilter={handleClearFilter}
        />
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">Title</CTableHeaderCell>
              <CTableHeaderCell scope="col">Branch Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Issue Date</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status</CTableHeaderCell>
              <CTableHeaderCell scope="col"></CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {filteredData.map((issue, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{issue.title}</CTableDataCell>
                <CTableDataCell>{issue.branchName}</CTableDataCell>
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

const issuesData = [
  {
    issueId: "ksdfjklsd3223",
    title: "Salary Problem",
    name: "John Doe",
    branchName: "Badulla",
    issueDate: "2020-01-01",
    status: "Open",
    contactNo: "07898989898",
    description: "Salary should be increased",
    membershipNo: "123456789",
  },
  {
    issueId: "ksdfjklsd3214",
    title: "Government Problem",
    name: "John Doe",
    branchName: "Galle",
    issueDate: "2020-01-01",
    status: "Open",
    contactNo: "07898989898",
    description: "Salary should be increased",
    membershipNo: "123456789",
  },
  {
    issueId: "ksdfjklsd3215",
    title: "Salary Problem",
    name: "John Doe",
    branchName: "Galle",
    issueDate: "2020-01-01",
    status: "Open",
    contactNo: "07898989898",
    description: "Salary should be increased",
    membershipNo: "123456789",
  },
  {
    issueId: "ksdfjklsd3216",
    title: "Government Problem",
    name: "John Doe",
    branchName: "Kandy",
    issueDate: "2020-01-01",
    status: "Viewed",
    contactNo: "07898989898",
    description: "Salary should be increased",
    membershipNo: "123456789",
  },
];
