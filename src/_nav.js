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
  },
  {
    component: CNavItem,
    name: "Add Admin",
    to: "/office/accounts/admin/add",
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Admins",
    to: "/office/accounts/admins",
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  },

  // Branch Secretary
  {
    component: CNavTitle,
    name: "Branch Secretaries",
  },
  {
    component: CNavItem,
    name: "Add Branch Secretary",
    to: "/office/accounts/branch-secretary/add",
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Branch Secretaries",
    to: "/office/accounts/branch-secretaries",
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  },

  // Officer
  {
    component: CNavTitle,
    name: "Officers",
  },
  {
    component: CNavItem,
    name: "Add Officer",
    to: "/office/accounts/officer/add",
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Officers",
    to: "/office/accounts/officers",
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: "Members",
  },

  {
    component: CNavItem,
    name: "Add Member",
    to: "/office/members/add-member",
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Members",
    to: "/office/members",
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "View Member",
    to: "/office/members/get-member",
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Issues",
  },
  {
    component: CNavItem,
    name: "Issue List",
    to: "/office/issues",
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
  },
];

export default _nav;
