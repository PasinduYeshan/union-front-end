import React, { useState } from "react";

const AccountTable = React.lazy(() => import("../AccountTable"));
const BSTableBody = React.lazy(() => import("./OfficeTableBody"));

const BSAccountsPage = () => {
  const [bsAccounts, setBsAccounts] = useState(bsAccountsData);

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
        accounts={bsAccounts}
        maxPages={maxPages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        tableHeaderCells={tableHeaderCells}
      >
        <BSTableBody accounts={bsAccounts} />
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
    branchName: "Horana",
    status: true,
    NIC: "123456789",
    accountType: "bsEditor",
  },
  {
    userId: "1wrewers",
    name: "John Doe",
    username: "johndoe",
    email: "john@gmail.com",
    contactNo: "07898989898",
    branchName: "Horana",
    status: true,
    NIC: "123456789",
    accountType: "bsEditor",
  },
  {
    userId: "1wrewere",
    name: "John Doe",
    username: "johndoe",
    email: "john@gmail.com",
    contactNo: "07898989898",
    branchName: "Horana",
    status: false,
    NIC: "123456789",
    accountType: "bsViewer",
  },
];
