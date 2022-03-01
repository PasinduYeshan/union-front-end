import React, { useState } from "react";

const AccountTable = React.lazy(() => import("./AccountTable"));

const BSAccountsPage = () => {
  // Handle pagination
    const maxPages = 1;
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <>
      <AccountTable
        accounts={bsAccounts}
        maxPages={maxPages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
};

export default BSAccountsPage;

const bsAccounts = [
  {
    userId: "1wrewer",
    name: "John Doe",
    username: "johndoe",
    email: "john@gmail.com",
    contactNo: "07898989898",
    branchName: "Horana",
    status: true,
    NIC: "123456789",
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
  },
];
