import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const IssueTable = React.lazy(() => import("./views/issues/IssueTable"));



const routes = [
  { path: "/office", exact: true, name: "Office" },
  { path: "/office/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/office/issues", name: "Issues", component: IssueTable },
  { path: "/office/issues/:issueId", name: "IssueDetails", component: IssueTable },
  
];

export default routes;
