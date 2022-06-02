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
  cilChatBubble,
  cilGroup,
  cilAddressBook,
  cilUserPlus,
  cilList,
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
    name: "View Member",
    to: "/office/member/get-member",
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    accountType: ["adminEditor", "adminViewer", "bsEditor", "bsViewer"],
  },
  {
    component: CNavTitle,
    name: "Issues",
    accountType: ["adminEditor", "adminViewer"],
  },
  {
    component: CNavItem,
    name: "Issue List",
    to: "/office/issues",
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
    accountType: ["adminEditor", "adminViewer"],
  },
  {
    component: CNavTitle,
    name: "Events",
    accountType: ["officer"]
  },
  {
    component: CNavItem,
    name: "Add Event",
    to: "/office/events/add",
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
    accountType: ["officer"]
  },
  {
    component: CNavItem,
    name: "Events List",
    to: "/office/events/view-all",
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    accountType: ["officer"]
  },
];

export default _nav;
