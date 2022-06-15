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

// Event related pages
const AddEventPage = React.lazy(() => import("./views/events/AddEventPage"));
const EventListPage = React.lazy(() => import("./views/events/EventTable"));
const EventPage = React.lazy(() => import("./views/events/EventPage"));

// User profile
const UserProfile = React.lazy(() => import("./views/profile/UserProfile"));

// Leader related pages
const AddLeader = React.lazy(() => import("./views/leaders/AddPage"));
const LeaderTable = React.lazy(() => import("./views/leaders/TablePage"));
const LeaderPage = React.lazy(() => import("./views/leaders/ViewPage"));

// Branch Secretary related pages
const AddBranchSecretaryPage = React.lazy(() => import("./views/branch-secretaries/AddPage"));
const BranchSecretariesTable = React.lazy(() => import("./views/branch-secretaries/TablePage"));
const BranchSecretaryPage = React.lazy(() => import("./views/branch-secretaries/ViewPage"));

// Committee Member related pages
const AddCommitteeMemberPage = React.lazy(() => import("./views/committee-members/AddPage"));
const CommitteeMembersTable = React.lazy(() => import("./views/committee-members/TablePage"));
const CommitteeMemberPage = React.lazy(() => import("./views/committee-members/ViewPage"));

// Announcement related pages
const AddAnnouncementPage = React.lazy(() => import("./views/announcements/AddPage"));
const AnnouncementTable = React.lazy(() => import("./views/announcements/TablePage"));
const AnnouncementPage = React.lazy(() => import("./views/announcements/ViewPage"));

const routes = [
  { path: "/office", exact: true, name: "Office", component: Dashboard, },
  {
    path: "/office/dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
    isLoggedIn: true,
  },
  // Issues
  {
    path: "/office/issues",
    exact: true,
    name: "Issues",
    component: IssueTable,
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer"],
  },
  {
    path: "/office/issues/view-issue",
    exact: true,
    name: "Issue Details",
    component: IssuePage,
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer"],
  },
  {
    path: "/office/member",
    exact: true,
    name: "Member",
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer", "bsEditor", "bsViewer"],
  },
  {
    path: "/office/members",
    exact: true,
    name: "Members",
    component: MemberTable,
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer", "bsEditor", "bsViewer"],
  },
  {
    path: "/office/member/view-member",
    name: "Member Details",
    component: ViewMemberPage,
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer", "bsEditor", "bsViewer"],
  },
  {
    path: "/office/member/get-member",
    name: "Member Details",
    component: ViewMemberPage,
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer", "bsEditor", "bsViewer"],
  },
  {
    path: "/office/member/add-member",
    name: "Add Member",
    component: AddMemberPage,
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer", "bsEditor", "bsViewer"],
  },
  {
    path: "/office/accounts",
    exact: true,
    name: "Accounts",
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer"],
  },
  // Branch Secretary related pages
  {
    path: "/office/accounts/branch-secretaries",
    name: "Branch Secretaries",
    component: UserAccountListPage,
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer"],
  },
  {
    path: "/office/accounts/branch-secretary",
    name: "Branch Secretary",
    exact: true,
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer"],
  },
  {
    path: "/office/accounts/branch-secretary/add",
    name: "Add Branch Secretary",
    component: AddUserAccountPage,
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer"],
  },

  {
    path: "/office/accounts/branch-secretary/account",
    name: "View Branch Secretary",
    component: UserAccountsPage,
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer"],
  },
  // Admin related pages
  {
    path: "/office/accounts/admins",
    name: "Admins",
    component: UserAccountListPage,
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer"],
  },
  {
    path: "/office/accounts/admin",
    name: "Admin",
    exact: true,
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer"],
  },
  {
    path: "/office/accounts/admin/add",
    name: "Add Admin",
    component: AddUserAccountPage,
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer"],
  },

  {
    path: "/office/accounts/admin/account",
    name: "View Admin",
    component: UserAccountsPage,
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer"],
  },
  // Officer related pages
  {
    path: "/office/accounts/officers",
    name: "Officers",
    component: UserAccountListPage,
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer"],
  },
  {
    path: "/office/accounts/officer",
    name: "Officer",
    exact: true,
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer"],
  },
  {
    path: "/office/accounts/officer/add",
    name: "Add Officer",
    component: AddUserAccountPage,
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer"],
  },

  {
    path: "/office/accounts/officer/account",
    name: "View Officer",
    component: UserAccountsPage,
    isLoggedIn: true,
    accountType: ["adminEditor", "adminViewer"],
  },
  // Event related routes
  {
    path: "/office/events",
    name: "Event",
    exact: true,
    isLoggedIn: true,
    component: EventListPage,
    accountType: ["officer"]
  },
  {
    path: "/office/events/add",
    name: "Add Event",
    component: AddEventPage,
    isLoggedIn: true,
    accountType: ["officer"]
  },
  {
    path: "/office/events/view",
    name: "View Event",
    component: EventPage,
    isLoggedIn: true,
    accountType: ["officer"]
  },
  {
    path: "/office/events/view-all",
    name: "View all Events",
    component: EventListPage,
    isLoggedIn: true,
    accountType: ["officer"]
  },
  // Profile
  {
    path: "/office/profile",
    name: "View User Profile",
    component: UserProfile,
    isLoggedIn: true,
  },
  // Leader related routes
  {
    path: "/office/leader",
    name: "Leader",
    exact: true,
    isLoggedIn: true,
    accountType: ["officer"],
    component: LeaderTable,
  },
  {
    path: "/office/leader/add",
    name: "Add Leader",
    component: AddLeader,
    isLoggedIn: true,
    accountType: ["officer"]
  },
  {
    path: "/office/leader/view",
    name: "View Leader",
    component: LeaderPage,
    isLoggedIn: true,
    accountType: ["officer"]
  },
  {
    path: "/office/leader/view-all",
    name: "View all Leaders",
    component: LeaderTable,
    isLoggedIn: true,
    accountType: ["officer"]
  },
  // Branch secretary related routes
  {
    path: "/office/branch-secretary",
    name: "Branch Secretary",
    exact: true,
    isLoggedIn: true,
    accountType: ["officer"],
    component: BranchSecretariesTable,
  },
  {
    path: "/office/branch-secretary/add",
    name: "Add Branch Secretary",
    component: AddBranchSecretaryPage,
    isLoggedIn: true,
    accountType: ["officer"]
  },
  {
    path: "/office/branch-secretary/view",
    name: "View Branch Secretary",
    component: BranchSecretaryPage,
    isLoggedIn: true,
    accountType: ["officer"]
  },
  {
    path: "/office/branch-secretary/view-all",
    name: "View all Branch Secretaries",
    component: BranchSecretariesTable,
    isLoggedIn: true,
    accountType: ["officer"]
  },
  // Committee member related routes
  {
    path: "/office/committee-member",
    name: "Committee Member",
    exact: true,
    isLoggedIn: true,
    accountType: ["officer"],
    component: CommitteeMembersTable,
  },
  {
    path: "/office/committee-member/add",
    name: "Add Committee Member",
    component: AddCommitteeMemberPage,
    isLoggedIn: true,
    accountType: ["officer"]
  },
  {
    path: "/office/committee-member/view",
    name: "View Committee Member",
    component: CommitteeMemberPage,
    isLoggedIn: true,
    accountType: ["officer"]
  },
  {
    path: "/office/committee-member/view-all",
    name: "View all committee members",
    component: CommitteeMembersTable,
    isLoggedIn: true,
    accountType: ["officer"]
  },
  // Announcement related routes
  {
    path: "/office/announcement",
    name: "Announcement",
    exact: true,
    isLoggedIn: true,
    accountType: ["officer"],
    component: AnnouncementTable,
  },
  {
    path: "/office/announcement/add",
    name: "Add Announcement",
    component: AddAnnouncementPage,
    isLoggedIn: true,
    accountType: ["officer"]
  },
  {
    path: "/office/announcement/view",
    name: "View Announcement",
    component: AnnouncementPage,
    isLoggedIn: true,
    accountType: ["officer"]
  },
  {
    path: "/office/announcement/view-all",
    name: "View all announcements",
    component: AnnouncementTable,
    isLoggedIn: true,
    accountType: ["officer"]
  },
];

export default routes;
