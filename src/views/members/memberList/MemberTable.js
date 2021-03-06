import React, { lazy, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

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
import api, { registerAccessToken } from "src/api";
import { accessToken } from "src/store";

import { LoadingIndicator } from "src/components";
import FilterTable from "./FilterTable";

/**
 * All the member details are displayed in this page
 */
const MemberTable = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const recordsPerPage = 10;
  const [maxPages, setMaxPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [members, setMembers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const [filterData, setFilterData] = useState({
    branchName: "",
  });
  const [filterErrors, setFilterErrors] = useState({});

  // Fetch members from back end
  useEffect(() => {
    fetchData({ page: pageNumber }).catch((e) => console.log(e));
  }, []);

  const fetchData = async (query) => {
    setLoading(true);
    if (!registerAccessToken(accessToken(), history, dispatch)) return;
    const res = await api.member.find({ ...query, limit: recordsPerPage });
    if (res.status != 200) {
      toast.error(res.message ? res.message : "Something went wrong");
      setLoading(false);
      return;
    } else {
      setTotalCount(res.data.count);
      setMembers(res.data.members);
      setFilteredData(res.data.members);
      setMaxPages(Math.ceil(res.data.count / recordsPerPage));
      setLoading(false);
    }
    setLoading(false);
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
        {loading ? (
          <div className="flex justify-center"> {LoadingIndicator("lg")} </div>
        ) : (
          <div>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Full Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Branch Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Membership Number
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col"></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filteredData.map((member, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{member.fullName}</CTableDataCell>
                    <CTableDataCell>{member.branchName}</CTableDataCell>
                    <CTableDataCell>{member.title}</CTableDataCell>
                    <CTableDataCell>{member.membershipNo}</CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        color="info"
                        variant="outline"
                        onClick={() =>
                          history.push({
                            pathname: "/office/member/view-member",
                            state: { memberId: member.userId, fromList: true },
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
        )}
      </div>
    </>
  );
};

export default MemberTable;

const initialFilterData = {
  branchName: "",
};
