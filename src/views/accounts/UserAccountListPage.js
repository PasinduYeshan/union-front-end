import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import api, { registerAccessToken } from "src/api";
import store, { accessToken } from "src/store";
import { toast } from "react-toastify";
import { deleteEmptyKeys } from "src/utils/function";
import { useDispatch } from "react-redux";

// Components
const AccountTable = React.lazy(() => import("./AccountTable"));
const BSTableBody = React.lazy(() => import("./UserAccountTableBody"));

const BSAccountsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentLocation = useLocation().pathname;

  const [loading, setLoading] = useState(false);
  const [bsAccounts, setBsAccounts] = useState([]);
  const [filteredData, setFilteredBSAccounts] = useState([]);
  const [filters, setFilters] = useState({
    branchName: "",
    status: "",
    accountType: "",
  });
  const [filterErrors, setFilterErrors] = useState({});
  const [accountsType, setAccountsType] = useState("");
  /*
   * Account Type
   */
  // Get account types

  /*
   * Fetch User Accounts
   */
  useEffect(() => {
    let isSubscribed = true;
    
    const locations = currentLocation.split("/")[3];
    let fetchAccountType = "";
    switch (locations) {
      case "branch-secretaries":
        fetchAccountType = "branchSecretary";
        break;
      case "officers":
        fetchAccountType = "officer";
        break;
      case "admins":
        fetchAccountType = "admin";
        break;
      default:
        break;
    }
    setLoading(true);
    const fetchData = async () => {
      if (!registerAccessToken(accessToken(), history, dispatch)) return;
      const res = await api.user.getUserAccounts(fetchAccountType);
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
    setAccountsType(fetchAccountType);
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
        accountsType={accountsType}
      >
        <BSTableBody accounts={filteredData} />
      </AccountTable>
    </>
  );
};

export default BSAccountsPage;
