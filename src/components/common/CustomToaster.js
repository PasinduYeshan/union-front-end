import React from "react";

import { CToast, CToastHeader, CToastBody } from "@coreui/react";

const CustomToaster = (
  <CToast title="sdf">
    <CToastHeader close>
      <svg
        className="rounded me-2"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
      >
        <rect width="100%" height="100%" fill="#007aff"></rect>
      </svg>
      <strong className="me-auto">"sdfsdf</strong>
    </CToastHeader>
    <CToastBody>"asfdsdf</CToastBody>
  </CToast>
);

export default CustomToaster;
