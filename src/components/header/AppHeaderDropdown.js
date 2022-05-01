import React from "react";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import { useDispatch } from "react-redux";
import store, { thunks } from "src/store";

import avatar8 from "./../../assets/images/avatars/avatar.png";
import { useHistory } from "react-router-dom";

const AppHeaderDropdown = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const submitLogOut = () => {
    dispatch(thunks.user.userLogout());
    history.replace("/");
  };

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Account
        </CDropdownHeader>
        //!TODO : Profile and Logout Settings
        <CDropdownItem href="/office/profile">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem onClick={submitLogOut}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Log Out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
