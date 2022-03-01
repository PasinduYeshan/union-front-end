import React from "react";
import { useParams } from "react-router-dom";

import {
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CBadge,
  CButton,
  CImage,
} from "@coreui/react";

import { saveImg , getImageFromBucket} from '../../utils/function'

const IssuePage = () => {
  const { issueId } = useParams();
  const issue = {
    issueId: "ksdfjklsd3223",
    title: "Salary Problem",
    name: "John Doe",
    branchName: "Horana",
    issueDate: "2020-01-01",
    status: "Open",
    contactNo: "07898989898",
    description: "Salary should be increased",
    membershipNo: "123456789",
    images: [
      "http://localhost:3000/static/media/avatar.342884a557a7ecea190d.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0TUoN5akAR9v-hbq671S4hPwBohaGS76edQ&usqp=CAU",
    ],
  };

  

  return (
    <>
      <div className="shadow border-b border-gray-200 sm:rounded-lg bg-white p-4 mb-5">
        <CForm className="mx-2">
          <div className="mb-3">
            <CFormLabel htmlFor="title">Issue Title</CFormLabel>
            <CFormInput
              className="bg-white"
              readOnly
              type="text"
              id="title"
              defaultValue={issue.title}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="branchName">Brnach Name</CFormLabel>
            <CFormInput
              className="bg-white"
              readOnly
              type="text"
              id="branchName"
              defaultValue={issue.branchName}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="name">Name</CFormLabel>
            <CFormInput
              className="bg-white"
              readOnly
              type="text"
              id="name"
              defaultValue={issue.name}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="contactNo">Contact Number</CFormLabel>
            <CFormInput
              className="bg-white"
              readOnly
              type="text"
              id="contactNo"
              defaultValue={issue.contactNo}
            />
          </div>
          <div className="mb-3 align-middle">
            <CFormLabel htmlFor="status">Issue Status</CFormLabel>
            <CBadge
              className="mx-4 "
              color={
                issue.status == "Open"
                  ? "warning"
                  : issue.status == "Viewed"
                  ? "info"
                  : "success"
              }
            >
              <span className="text-sm px-2">{issue.status}</span>
            </CBadge>
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="description">Issue Description</CFormLabel>
            <CFormTextarea
              className="bg-white"
              readOnly
              id="description"
              rows="5"
              defaultValue={issue.description}
            ></CFormTextarea>
          </div>
          <div className="mb-3 grid grid-cols-2 md:grid-cols-3 align-middle justify-start">
            {issue.images.map((image, index) => (
              <div key={index} className="flex-row p-2">
                <CImage
                  key={index}
                  className="align-middle"
                  rounded
                  // thumbnail
                  src={getImageFromBucket(image)}
                  width={200}
                  height={200}
                  align="center"
                />{" "}
              </div>
            ))}
            {/* <iframe src={issue.images[0]}></iframe> */}
          </div>
          <div className="mb-3 flex">
            <CButton
              className="mt-2"
              color="success"
              variant="outline"
              onClick={() => saveImg(issue.images)}
            >
              {" "}
              Download Images
            </CButton>
          </div>
        </CForm>
      </div>
    </>
  );
};

export default IssuePage;
