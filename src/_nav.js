import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilGroup,
  cilChatBubble,
  cilAddressBook,
  cilUserPlus,
  cilList,
  cilLibraryAdd,
  cilUserFollow,
  cilPlus,
  cilSearch
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  // Admins
  {
    component: CNavTitle,
    name: "Admins",
    accountType: ["adminEditor", "adminViewer"],
  },
  {
    component: CNavItem,
    name: "Add Admin",
    to: "/office/accounts/admin/add",
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
    accountType: ["adminEditor", "adminViewer"],
  },
  {
    component: CNavItem,
    name: "Admins",
    to: "/office/accounts/admins",
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    accountType: ["adminEditor", "adminViewer"],
  },

  // Branch Secretary
  {
    component: CNavTitle,
    name: "Branch Secretaries",
    accountType: ["adminEditor", "adminViewer"],
  },
  
  {
    component: CNavItem,
    name: "Add Branch Secretary",
    to: "/office/accounts/branch-secretary/add",
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
    accountType: ["adminEditor", "adminViewer"],
  },
  {
    component: CNavItem,
    name: "Branch Secretaries",
    to: "/office/accounts/branch-secretaries",
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    accountType: ["adminEditor", "adminViewer"],
  },

  // Officer
  {
    component: CNavTitle,
    name: "Officers",
    accountType: ["adminEditor", "adminViewer"],
  },
  {
    component: CNavItem,
    name: "Add Officer",
    to: "/office/accounts/officer/add",
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
    accountType: ["adminEditor", "adminViewer"],
  },
  {
    component: CNavItem,
    name: "Officers",
    to: "/office/accounts/officers",
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    accountType: ["adminEditor", "adminViewer"],
  },

  {
    component: CNavTitle,
    name: "Members",
    accountType: ["adminEditor", "adminViewer", "bsEditor", "bsViewer"],
  },

  {
    component: CNavItem,
    name: "Add Member",
    to: "/office/member/add-member",
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
    accountType: ["adminEditor", "adminViewer", "bsEditor", "bsViewer"],
  },
  {
    component: CNavItem,
    name: "Members",
    to: "/office/members",
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    accountType: ["adminEditor", "adminViewer", "bsEditor", "bsViewer"],
  },
  {
    component: CNavItem,
    name: "Search Member",
    to: "/office/member/get-member",
    icon: <CIcon icon={cilSearch} customClassName="nav-icon" />,
    accountType: ["adminEditor", "adminViewer", "bsEditor", "bsViewer"],
  },
  {
    component: CNavTitle,
    name: "Issues",
    accountType: ["adminEditor", "adminViewer"],
  },
  {
    component: CNavItem,
    name: "Issues",
    to: "/office/issues",
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
    accountType: ["adminEditor", "adminViewer"],
  },
  // Officer nav items
  {
    component: CNavTitle,
    name: "Events",
    accountType: ["officer"]
  },
  {
    component: CNavItem,
    name: "Add Event",
    to: "/office/events/add",
    icon: <CIcon icon={cilLibraryAdd} customClassName="nav-icon" />,
    accountType: ["officer"]
  },
  {
    component: CNavItem,
    name: "Events List",
    to: "/office/events/view-all",
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    accountType: ["officer"]
  },
  // Leaders
  {
    component: CNavTitle,
    name: "Leader",
    accountType: ["officer"]
  },
  {
    component: CNavItem,
    name: "Add Leader",
    to: "/office/leader/add",
    icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
    accountType: ["officer"]
  },
  {
    component: CNavItem,
    name: "Leaders",
    to: "/office/leader/view-all",
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    accountType: ["officer"]
  },
  // Committee Members
  {
    component: CNavTitle,
    name: "Committee Members",
    accountType: ["officer"]
  },
  {
    component: CNavItem,
    name: "Add Committee Member",
    to: "/office/committee/add",
    icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
    accountType: ["officer"]
  },
  {
    component: CNavItem,
    name: "Committee Members",
    to: "/office/committee/view-all",
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    accountType: ["officer"]
  },
  // Branch Secretaries Section
  {
    component: CNavTitle,
    name: "Branch Secretaries",
    accountType: ["officer"]
  },
  {
    component: CNavItem,
    name: "Add Branch Secretary",
    to: "/office/branch-secretary/add",
    icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
    accountType: ["officer"]
  },
  {
    component: CNavItem,
    name: "Branch Secretaries",
    to: "/office/branch-secretary/view-all",
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    accountType: ["officer"]
  },
  // Announcement Section
  {
    component: CNavTitle,
    name: "Announcement",
    accountType: ["officer"]
  },
  {
    component: CNavItem,
    name: "Add Announcement",
    to: "/office/announcement/add",
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
    accountType: ["officer"]
  },
  {
    component: CNavItem,
    name: "Announcements",
    to: "/office/announcement/view-all",
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    accountType: ["officer"]
  },
];

export default _nav;
