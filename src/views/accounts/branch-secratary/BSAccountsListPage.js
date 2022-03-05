import React, { useState } from "react";

const AccountTable = React.lazy(() => import("../AccountTable"));
const BSTableBody = React.lazy(() => import("./BSTableBody"));

import { deleteEmptyKeys } from "src/utils/function";

const BSAccountsPage = () => {
  const [bsAccounts, setBsAccounts] = useState(bsAccountsData);
  const [filteredBSAccounts, setFilteredBSAccounts] = useState(bsAccounts);
  // Handle filter
  const [filterData, setFilterData] = useState({
    branchName: "",
    status: "",
  });
  const [filterErrors, setFilterErrors] = useState({});

  // From store
  const branchSecrataryAccounts = bsAccountsData;

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const filters = deleteEmptyKeys(filterData);
    const filteredAccounts = branchSecrataryAccounts.filter((account) => {
      for (let key in filters) {
        console.log(key, filters[key]);
        if (filters[key] != account[key]) return false;
      }
      return true;
    });
    setFilteredBSAccounts(filteredAccounts);
  };

  const handleClearFilter = () => {
    setFilterData({});
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
        accounts={filteredBSAccounts}
        maxPages={maxPages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        tableHeaderCells={tableHeaderCells}
        filterData={filterData}
        filterErrors={filterErrors}
        handleFilterChange={handleFilterChange}
        handleFilterSubmit={handleFilterSubmit}
        handleClearFilter={handleClearFilter}
      >
        <BSTableBody accounts={filteredBSAccounts} />
      </AccountTable>
    </>
  );
};

export default BSAccountsPage;

const bsAccountsData = [
  {
    userId: "1wrewer",
    name: "John Doe",
    username: "johndoe",
    email: "john@gmail.com",
    contactNo: "07898989898",
    branchName: "Galle",
    status: "Active",
    NIC: "123456789",
    accountType: "bsEditor",
  },
  {
    userId: "1wrewers",
    name: "John Doe",
    username: "johndoe",
    email: "john@gmail.com",
    contactNo: "07898989898",
    branchName: "Kandy",
    status: "Active",
    NIC: "123456789",
    accountType: "bsEditor",
  },
  {
    userId: "1wrewere",
    name: "John Doe",
    username: "johndoe",
    email: "john@gmail.com",
    contactNo: "07898989898",
    branchName: "Galle",
    status: "Inactive",
    NIC: "123456789",
    accountType: "bsViewer",
  },
];
