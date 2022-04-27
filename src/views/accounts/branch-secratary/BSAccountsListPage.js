import React, { useEffect, useState } from "react";

import api, { registerAccessToken } from "src/api";
import store from "src/store";

// Components
const AccountTable = React.lazy(() => import("../AccountTable"));
const BSTableBody = React.lazy(() => import("./BSTableBody"));

import { deleteEmptyKeys } from "src/utils/function";
import { toast } from "react-toastify";

const BSAccountsPage = () => {
  const [loading, setLoading] = useState(false);
  const [bsAccounts, setBsAccounts] = useState([]);
  const [filteredData, setFilteredBSAccounts] = useState([]);
  const [filters, setFilters] = useState({
    branchName: "",
    status: "",
    accountType: "",
  });
  const [filterErrors, setFilterErrors] = useState({});

  /**
   * Fetch Branch Secretaries Accounts
   */
  useEffect(() => {
    let isSubscribed = true;
    setLoading(true);
    const fetchData = async () => {
      registerAccessToken(store.getState().user.tokens.access);
      const res = await api.user.getUserAccounts("branchSecretary");
      console.log(res);
      if (res.status === 200) {
        setBsAccounts(res.data);
        setFilteredBSAccounts(res.data);
      } else {
        console.log("Error Occurred while fetching BS accounts", res);
        toast.error("Error Occurred, Sorry for the inconvenience");
      }
      setLoading(false);
    };
    fetchData().catch((err) => console.log(err));
    setLoading(false);

    // Cancel any pending request
    return () => (isSubscribed = false);
  }, []);

  /**
   * Handle Filter Change
   * @param {*} e
   */
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const filterItems = deleteEmptyKeys(filters);
    const filteredAccounts = bsAccounts.filter((account) => {
      for (let key in filterItems) {
        if (filterItems[key] != account[key]) return false;
      }
      return true;
    });
    setFilteredBSAccounts(filteredAccounts);
  };

  const handleClearFilter = () => {
    setFilters({ branchName: "", status: "", accountType: "" });
    console.log(filters);
    setFilteredBSAccounts(bsAccounts);
  };

  // Handle pagination
  const maxPages = 1;
  const [pageNumber, setPageNumber] = useState(1);

  const tableHeaderCells = [
    "Branch Name",
    "Name",
    "Email",
    "Access Level",
    "Status",
    "",
  ];

  return (
    <>
      <AccountTable
        accounts={filteredData}
        maxPages={maxPages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        tableHeaderCells={tableHeaderCells}
        filters={filters}
        filterErrors={filterErrors}
        handleFilterChange={handleFilterChange}
        handleFilterSubmit={handleFilterSubmit}
        handleClearFilter={handleClearFilter}
      >
        <BSTableBody accounts={filteredData} />
      </AccountTable>
    </>
  );
};

export default BSAccountsPage;


