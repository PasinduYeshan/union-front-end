import React, { lazy, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { convertTZ } from "src/utils/function";

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
import api, { registerAccessToken } from "src/api";
import { toast } from "react-toastify";
import { accessToken } from "src/store";
import { useDispatch } from "react-redux";

const IssueTable = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const recordsPerPage = 10;
  const [maxPages, setMaxPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [issues, setIssues] = useState([]);
  const [totalIssueCount, setTotalIssueCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const [filterData, setFilterData] = useState({
    branchName: "",
    status: "",
  });
  const [filterErrors, setFilterErrors] = useState({});

  // Fetch issues from back end
  useEffect(() => {
    fetchData({ page: pageNumber }).catch((e) => console.log(e));
  }, []);

  const fetchData = async (qeury) => {
    setLoading(true);
    if (!registerAccessToken(accessToken(), history, dispatch)) return;
    const res = await api.issue.get({ ...qeury, limit: recordsPerPage });
    if (res.status != 200) {
      toast.error(res.message ? res.message : "Something went wrong");
      setLoading(false);
      return;
    } else {
      setTotalIssueCount(res.data.count);
      setIssues(res.data.issues);
      setFilteredData(res.data.issues);
      setMaxPages(Math.ceil(res.data.count / recordsPerPage));
      setLoading(false);
    }
  };

  /**
   * Filter related handlers
   */
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };

  const handleFilterSubmit = async (e) => {
    e.preventDefault();
    const filters = deleteEmptyKeys(filterData);
    await fetchData({ ...filters, page: 1 });
    setPageNumber(1);
  };

  const handleClearFilter = async () => {
    setFilterData({
      branchName: "",
      status: "",
    });
    await fetchData({ page: 1 });
  };

  /**
   * Pagination related functions
   */
  const handlePageChangePrevious = async () => {
    if (pageNumber == 1) {
      return;
    } else {
      await fetchData({ page: pageNumber - 1 });
      setPageNumber(pageNumber - 1);
    }
  };

  const handlePageChangeNext = async () => {
    if (pageNumber == maxPages) {
      return;
    } else {
      await fetchData({ page: pageNumber + 1 });
      setPageNumber(pageNumber + 1);
    }
  };

  const PaginationPages = () => {
    const items = [];
    for (let i = 1; i <= maxPages; i++) {
      items.push(
        <CPaginationItem
          key={i}
          active={i === pageNumber}
          onClick={async () => {
            setPageNumber(i);
            await fetchData({ page: i });
          }}
        >
          {i}
        </CPaginationItem>
      );
    }
    return items;
  };

  return (
    <>
      <div className="shadow border-b border-gray-200 sm:rounded-lg bg-white p-4 mb-5 justify-center">
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
                <CTableDataCell>{convertTZ(issue.issueDate)}</CTableDataCell>
                <CTableDataCell>
                  <CBadge
                    color={
                      issue.status == "Pending"
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
                      history.push({
                        pathname: "/office/issues/view-issue",
                        state: { issueId: issue.issueId },
                      })
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
