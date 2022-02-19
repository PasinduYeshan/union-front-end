import React from "react";
import { useParams } from "react-router-dom";

import {
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CBadge,
} from "@coreui/react";

const IssuePage = () => {
  const { issueId } = useParams();
  const issue = {
      issueId: "ksdfjklsd3213",
      telephone : "07898989898",
    title: "Salary Problem",
    name: "John Doe",
    issueDate: "2020-01-01",
    status: "Open",
    description: "Salary should be increased ",
  };

  return (
    <>
      <div className="shadow border-b border-gray-200 sm:rounded-lg bg-white p-4 mb-5">
        <CForm className="mx-2">
          <div className="mb-3">
            <CFormLabel htmlFor="exampleFormControlInput1">
              Issue Title
            </CFormLabel>
            <CFormInput
              type="text"
              id="exampleFormControlInput1"
              value={issue.title}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="exampleFormControlInput1">Name</CFormLabel>
            <CFormInput
              type="text"
              id="exampleFormControlInput1"
              value={issue.name}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="exampleFormControlInput1">
              Contact Number
            </CFormLabel>
            <CFormInput
              type="text"
              id="exampleFormControlInput1"
              value={issue.telephone}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="exampleFormControlInput1">
              Issue Status
            </CFormLabel>
            <CBadge
              className="mx-4 p-1"
              color={
                issue.status == "Open"
                  ? "warning"
                  : issue.status == "Viewed"
                  ? "info"
                  : "success"
              }
            >
              {issue.status}
            </CBadge>
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="exampleFormControlTextarea1">
              Issue Description
            </CFormLabel>
            <CFormTextarea
              id="exampleFormControlTextarea1"
              rows="5"
              value={issue.description}
            ></CFormTextarea>
          </div>
        </CForm>
      </div>
    </>
  );
};

export default IssuePage;
