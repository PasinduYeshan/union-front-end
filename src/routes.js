import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

// Issue related pages
const IssueTable = React.lazy(() => import("./views/issues/IssueTable"));
const IssuePage = React.lazy(() => import("./views/issues/IssuePage"));

// Members related pages
const ViewMemberPage = React.lazy(() =>
  import("./views/members/viewMember/ViewMemberPage")
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
];

export default routes;
