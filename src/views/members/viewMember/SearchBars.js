import React from "react";

import {
    CForm,
    CFormInput,
    CFormLabel,
    CFormTextarea,
    CBadge,
    CCol,
    CButton,
    CRow,
} from "@coreui/react";
  
import CIcon from "@coreui/icons-react";
import { cilSearch } from "@coreui/icons";

const SearchBars = ({value, handleSearch, handleChange}) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="mb-3 mx-2 md:mx-4">
          <div className="input-group relative flex flex-wrap items-stretch w-full mb-2">
            <CCol>
              <CFormLabel htmlFor="oldNIC" className="uppercase mx-2 pt-1">
                OLD NIC Number
              </CFormLabel>
              <div className="flex flex-row h-10">
                <CFormInput
                  name="oldNIC"
                  className="bg-white"
                  type="text"
                  id="oldNIC"
                  value={value.oldNIC}
                  onChange={handleChange}
                />
                <CButton
                  color="success flex flex-row"
                  name="oldNICSearch"
                  onClick={handleSearch}
                >
                  <CIcon icon={cilSearch} size="lg" className="mx-2" />
                  Search
                </CButton>
              </div>
            </CCol>
          </div>
        </div>
        <div className="mb-3 mx-2 md:mx-4">
          <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
            <CCol>
              <CFormLabel htmlFor="newNIC" className="uppercase mx-2 pt-1">
                NEW NIC Number
              </CFormLabel>
              <div className="flex flex-row h-10">
                <CFormInput
                  name="newNIC"
                  className="bg-white"
                  type="text"
                  id="newNIC"
                  value={value.newNIC}
                  onChange={handleChange}
                />
                <CButton
                  color="success flex flex-row"
                  name="newNICSearch"
                  onClick={handleSearch}
                >
                  <CIcon icon={cilSearch} size="lg" className="mx-2" />
                  Search
                </CButton>
              </div>
            </CCol>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBars;