import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { selectors, thunks } from "src/store";

import { AppSidebarNav } from "./AppSidebarNav";

const logoPhoto = require("../assets/images/logo.png");
import { logoNegative } from "src/assets/brand/logo-negative";
import { sygnet } from "src/assets/brand/sygnet";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import navigation from "../_nav";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const unfoldable = useSelector(selectors.ui.selectUnfoldable);
  const sidebarShow = useSelector(selectors.ui.selectSidebarShow);
  const accountType = useSelector(selectors.user.selectAccountType);
  const [navItems, setNavItems] = useState([]);
  

  useEffect(() => {
    const temps = navigation.filter((item) => {
      if (item.accountType) {
        if (item.accountType.indexOf(accountType) !== -1) {
          delete item.accountType;
          return item;
        }
      } else {
        return item;
      }
    });
    setNavItems(temps);
  }, [accountType]);
  
  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch(thunks.ui.setSidebarShow(visible));
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
      { !unfoldable ? (<img className="h-8 w-auto sm:h-10" src={logoPhoto} />) : ""}
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navItems} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch(thunks.ui.setUnfoldable(!unfoldable))}
      />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
