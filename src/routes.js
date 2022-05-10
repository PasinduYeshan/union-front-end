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
const MemberTable = React.lazy(() =>
  import("./views/members/memberList/MemberTable")
);

// Accounts related pages
const AddUserAccountPage = React.lazy(() =>
  import("./views/accounts/AddUserAccountPage")
);
const UserAccountListPage = React.lazy(() =>
  import("./views/accounts/UserAccountListPage")
);
const UserAccountsPage = React.lazy(() =>
  import("./views/accounts/UserAccountPage")
);

const routes = [
  { path: "/office", exact: true, name: "Office" },
  {
    path: "/office/dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
  },
  // Issues
  {
    path: "/office/issues",
    exact: true,
    name: "Issues",
    component: IssueTable,
  },
  {
    path: "/office/issues/view-issue",
    exact: true,
    name: "Issue Details",
    component: IssuePage,
  },
  {
    path: "/office/members",
    exact: true,
    name: "Members",
    component: MemberTable,
  },
  {
    path: "/office/members/view-member",
    name: "Member Details",
    component: ViewMemberPage,
  },
  {
    path: "/office/members/get-member",
    name: "Member Details",
    component: ViewMemberPage,
  },
  {
    path: "/office/members/add-member",
    name: "Add Member",
    component: AddMemberPage,
  },
  {
    path: "/office/accounts",
    exact: true,
    name: "Accounts",
  },
  // Branch Secretary related pages
  {
    path: "/office/accounts/branch-secretaries",
    name: "Branch Secretaries",
    component: UserAccountListPage,
  },
  {
    path: "/office/accounts/branch-secretary",
    name: "Branch Secretary",
    exact: true,
  },
  {
    path: "/office/accounts/branch-secretary/add",
    name: "Add Branch Secretary",
    component: AddUserAccountPage,
  },

  {
    path: "/office/accounts/branch-secretary/account",
    name: "View Branch Secretary",
    component: UserAccountsPage,
  },
  // Admin related pages
  {
    path: "/office/accounts/admins",
    name: "Admins",
    component: UserAccountListPage,
  },
  {
    path: "/office/accounts/admin",
    name: "Admin",
    exact: true,
  },
  {
    path: "/office/accounts/admin/add",
    name: "Add Admin",
    component: AddUserAccountPage,
  },

  {
    path: "/office/accounts/admin/account",
    name: "View Admin",
    component: UserAccountsPage,
  },
  // Officer related pages
  {
    path: "/office/accounts/officers",
    name: "Officers",
    component: UserAccountListPage,
  },
  {
    path: "/office/accounts/officer",
    name: "Officer",
    exact: true,
  },
  {
    path: "/office/accounts/officer/add",
    name: "Add Officer",
    component: AddUserAccountPage,
  },

  {
    path: "/office/accounts/officer/account",
    name: "View Officer",
    component: UserAccountsPage,
  },
];

export default routes;
