import React from "react";

import {
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CBadge,
  CTableHeaderCell,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeader,
  CTableRow,
  CCol,
} from "@coreui/react";

const DepartmentDetailsSection = ({member}) => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-3">Departmental Details</h1>
      <div className="row g-3">
        <CCol className="mb-3" xs={12}>
           <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">Title</CFormLabel>
          <CFormInput
            className="bg-white border-bottom"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.title}
          />
        </CCol>
        <CCol className="mb-3" xs={12}>
           <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Grade
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.grade}
          />
        </CCol>
        <CCol className="mb-3" xs={12}>
           <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Date of Appointment
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.dateOfAppointment}
          />
        </CCol>
        <CCol className="mb-3" md={6}>
           <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Permanent Work Station
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.permanentWorkStation}
          />
        </CCol>
        <CCol className="mb-3" md={6}>
           <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Present Work Station
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.presentWorkStation}
          />
        </CCol>
        <CCol className="mb-3" md={6}>
           <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Date of Pension
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.dateOfPension}
          />
        </CCol>
        <CCol className="mb-3" md={6}>
           <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Office of the Regional Accountant
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.officeOfRegionalAccountant}
          />
        </CCol>
        <CCol className="mb-3" md={4}>
           <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Pay Sheet No
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.paySheetNo}
          />
        </CCol>
        <CCol className="mb-3" md={4}>
           <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Employee ID
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.employeeId}
          />
        </CCol>
        <CCol className="mb-3" md={4}>
          <CFormLabel htmlFor="exampleFormControlInput1" className="uppercase">
            Office of the DPMG
          </CFormLabel>
          <CFormInput
            className="bg-white"
            readOnly
            type="text"
            id="exampleFormControlInput1"
            defaultValue={member.officeOfDPMG}
          />
        </CCol>
      </div>
    </>
  );
};

export default DepartmentDetailsSection;
