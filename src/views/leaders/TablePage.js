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
} from "@coreui/react";


import { accessToken } from "src/store";
import api, { registerAccessToken } from "src/api";
import { LoadingIndicator } from "src/components";

/**
 * Display all the leaders in the leader section
 */
const LeaderTablePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch issues from back end
  useEffect(() => {
    fetchData({ page: pageNumber }).catch((e) => console.log(e));
  }, []);

  const fetchData = async (query) => {
    setLoading(true);
    if (!registerAccessToken(accessToken(), history, dispatch)) return;
    const res = await api.leader.get({});
    if (res.status != 200) {
      toast.error(res.message ? res.message : "Something went wrong");
      setLoading(false);
      return;
    } else {
      setFetchedData(res.data);
      // setMaxPages(Math.ceil(res.data.count / recordsPerPage));
      setLoading(false);
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
                  <CTableHeaderCell scope="col">Position</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Name
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col"></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {fetchedData.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{item.position}</CTableDataCell>
                    <CTableDataCell>{item.name}</CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        color="info"
                        variant="outline"
                        onClick={() =>
                          history.push({
                            pathname: "/office/leader/view",
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
          </div>
        )}
      </div>
    </>
  );
};

export default LeaderTablePage;
