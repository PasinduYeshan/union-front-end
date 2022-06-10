import React from "react";

import {
  CForm,
  CButton,
  CImage,
  CFormSwitch,
  CCallout,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";

const Modal = ({
  modalVisible,
  setModalVisible,
  title,
  body,
  closeLabel = "Close",
  successLabel = "Save",
  successCallback,
}) => {
  return (
    <div>
      <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <CModalHeader onClose={() => setModalVisible(false)}>
          <CModalTitle>{title}</CModalTitle>
        </CModalHeader>
        <CModalBody>{body}</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModalVisible(false)}>
            {closeLabel}
          </CButton>
          <CButton color="danger" onClick={successCallback}>
            {successLabel}
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default Modal;
