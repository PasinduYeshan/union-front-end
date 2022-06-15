import React, { lazy, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
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

import { cilArrowBottom, cilArrowTop } from "@coreui/icons";

import { accessToken } from "src/store";
import api, { registerAccessToken } from "src/api";
import { LoadingIndicator } from "src/components";
import { convertTZ } from "src/utils/function";
import CIcon from "@coreui/icons-react";

/**
 * Display all the committee members which will be displayed in web page
 * @returns
 */
const CommitteeMembersPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const recordsPerPage = 10;
  const [maxPages, setMaxPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sortDateDescendingOrder, setSortByDateDescendingOrder] =
    useState(true);

  // Fetch issues from back end
  useEffect(() => {
    fetchData({ page: pageNumber }).catch((e) => console.log(e));
  }, []);

  const fetchData = async (query) => {
    setLoading(true);
    if (!registerAccessToken(accessToken(), history, dispatch)) return;
    const res = await api.committeeMember.get({});
    if (res.status != 200) {
      toast.error(res.message ? res.message : "Something went wrong");
      setLoading(false);
      return;
    } else {
      setFetchedData(res.data);
      setPageNumber(1);
      console.log(res.data);
      const displayData = res.data.slice(0, pageNumber * recordsPerPage);
      setPageData(displayData);

      setMaxPages(Math.ceil(res.data.length / recordsPerPage));
      setLoading(false);
    }
  };

  /**
   * Pagination related functions
   */
  const handlePageChangePrevious = async () => {
    if (pageNumber == 1) {
      return;
    } else {
      const displayData = fetchedData.slice(
        (pageNumber - 1 - 1) * recordsPerPage,
        (pageNumber - 1) * recordsPerPage
      );
      setPageData(displayData);
      setPageNumber(pageNumber - 1);
    }
  };

  const handlePageChangeNext = async () => {
    if (pageNumber == maxPages) {
      return;
    } else {
      const displayData = fetchedData.slice(
        (pageNumber + 1 - 1) * recordsPerPage,
        (pageNumber + 1) * recordsPerPage
      );
      setPageData(displayData);
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
            const displayData = fetchedData.slice(
              (i - 1) * recordsPerPage,
              i * recordsPerPage
            );
            setPageData(displayData);
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
        {loading ? (
          <div className="flex justify-center">{LoadingIndicator("lg")}</div>
        ) : (
          <div>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Position</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Display Order</CTableHeaderCell>
                  <CTableHeaderCell scope="col"></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {pageData.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{item.position}</CTableDataCell>
                    <CTableDataCell>{item.name}</CTableDataCell>
                    <CTableDataCell>{item.order}</CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        color="info"
                        variant="outline"
                        onClick={() =>
                          history.push({
                            pathname: "/office/committee-member/view",
                            state: item,
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

export default CommitteeMembersPage;
