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
  // {
  //   component: CNavItem,
  //   name: 'Dashboard',
  //   to: '/office/dashboard',
  //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
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

  {
    component: CNavTitle,
    name: "Members",
  },

  {
    component: CNavItem,
    name: "Add Member",
    to: "/office/member/add-member",
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "View Member",
    to: "/office/member/view-member",
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
