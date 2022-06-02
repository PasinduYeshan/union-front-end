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
 * Display all the events in the table
 * @returns
 */
const EventTable = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const recordsPerPage = 10;
  const [maxPages, setMaxPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [events, setEvents] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sortDateDescendingOrder, setSortByDateDescendingOrder] = useState(true);

  // Fetch issues from back end
  useEffect(() => {
    fetchData({ page: pageNumber }).catch((e) => console.log(e));
  }, []);

  const fetchData = async (query) => {
    setLoading(true);
    if (!registerAccessToken(accessToken(), history, dispatch)) return;
    const res = await api.event.get({...query, limit: recordsPerPage });
    if (res.status != 200) {
      toast.error(res.message ? res.message : "Something went wrong");
      setLoading(false);
      return;
    } else {
      setTotalCount(res.data.count);
      setEvents(res.data.events);
      setMaxPages(Math.ceil(res.data.count / recordsPerPage));
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

  // Sort by date
  const _sortDateDescendingOrder = () => {
    if (!sortDateDescendingOrder) {
      setEvents(events.sort((a, b) =>  new Date(b.date) - new Date(a.date)));
      setSortByDateDescendingOrder(!sortDateDescendingOrder);
    } else {
      setEvents(events.sort((a, b) =>  new Date(a.date) - new Date(b.date)));
      setSortByDateDescendingOrder(!sortDateDescendingOrder);
    }
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
                  <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Event Date{" "}
                    <CButton
                      color="dark"
                      variant="ghost"
                      onClick={_sortDateDescendingOrder}
                    >
                      <CIcon icon={sortDateDescendingOrder ? cilArrowBottom : cilArrowTop} />
                    </CButton>{" "}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col"></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {events.map((event, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{event.title}</CTableDataCell>
                    <CTableDataCell>{convertTZ(event.date)}</CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        color="info"
                        variant="outline"
                        onClick={() =>
                          history.push({
                            pathname: "/office/events/view",
                            state: { eventId: event.eventId },
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

export default EventTable;
