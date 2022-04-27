import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

// Issue related pages
const IssueTable = React.lazy(() => import("./views/issues/IssueTable"));
const IssuePage = React.lazy(() => import("./views/issues/IssuePage"));

// Members related pages
const ViewMemberPage = React.lazy(() =>
  import("./views/members/viewMember/ViewMemberPage")
);
const AddMemberPage = React.lazy(() =>
  import("./views/members/addMember/AddMemberPage")
);

// Accounts related pages
const AddBSUserAccountPage = React.lazy(() =>
  import("./views/accounts/branch-secretary/AddBSUserAccountPage")
);
const BSAccountsPage = React.lazy(() =>
  import("./views/accounts/branch-secretary/BSAccountsListPage")
);
const BSUserAccountPage = React.lazy(() =>
  import("./views/accounts/branch-secretary/BSUserAccountPage")
);

//Event related pages

const routes = [
  { path: "/office", exact: true, name: "Office" },
  {
    path: "/office/dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/office/issues",
    exact: true,
    name: "Issues",
    component: IssueTable,
  },
  {
    path: "/office/issues/:issueId",
    exact: true,
    name: "Issue Details",
    component: IssuePage,
  },
  {
    path: "/office/member",
    exact: true,
    name: "Member",
  },
  {
    path: "/office/member/view-member",
    name: "Member Details",
    component: ViewMemberPage,
  },
  {
    path: "/office/member/add-member",
    name: "Add Member",
    component: AddMemberPage,
  },
  {
    path: "/office/accounts",
    exact: true,
    name: "Accounts",
  },
  {
    path: "/office/accounts/branch-secretaries",
    name: "Branch Secretaries",
    component: BSAccountsPage,
  },
  {
    path: "/office/accounts/branch-secretary",
    name: "Branch Secretary",
    exact: true,
  },
  {
    path: "/office/accounts/branch-secretary/add",
    name: "Add Branch Secretary",
    component: AddBSUserAccountPage,
  },

  {
    path: "/office/accounts/branch-secretary/account",
    name: "View Branch Secretary",
    component: BSUserAccountPage,
  },
];

export default routes;
