import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import Joi from "joi";
import { toast } from "react-toastify";

import {
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CBadge,
  CButton,
  CImage,
} from "@coreui/react";

import api, { registerAccessToken } from "src/api";
import store, { accessToken } from "src/store";
import { saveImg, getImageFromBucket, convertTZ } from "../../utils/function";
import { image1, image2} from "src/configs/constants";

import {
  CustomCFormInputGroup,
  CustomCFormSelectGroup,
  CustomCFormTextAreaGroup,
} from "src/components/common/CustomCInputGroup";

const IssuePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const issueId = useLocation().state.issueId;

  const [issue, setIssue] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});

  // Fetch data from server
  useEffect(() => {
    const fetchData = async () => {
      if (!registerAccessToken(accessToken(), history, dispatch)) return;
      const res = await api.issue.getOne(issueId);
      if (res.status != 200) {
        toast.error(
          res.message ? res.message : "Error occurred, please try again"
        );
      } else {
        setIssue({
          ...res.data,
          images: [
            image1,
            image2
          ],
        });
      }
    };

    fetchData().catch((e) => console.log(e));
  }, []);

  // Joi schema
  const schema = Joi.object({
    status: Joi.string().optional().label("status"),
  });

  /*
   * Handling Button Presses
   */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setIssue({ ...issue, [name]: files });
    } else {
      delete formErrors[name];
      setIssue({ ...issue, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    const { error, value } = schema.validate(
      { status: issue.status },
      { abortEarly: false }
    );
    if (!error) {
      e.preventDefault();
      const res = await api.issue.update(issueId, { status: issue.status });
      if (res.status === 200) {
        toast.success("Issue status is updated successfully");
      } else {
        toast.error(
          res.message ? res.message : "Error occurred. Please try again later."
        );
      }
      return;
    } else {
      const errors = {};
      for (let item of error.details) {
        errors[item.path[0]] = item.message;
      }
      setFormErrors(errors);
    }
  };

  return (
    <>
      <div className="shadow border-b border-gray-200 sm:rounded-lg bg-white p-4 mb-5 row g-3">
        <CForm className="mx-2 row g-3">
          <CustomCFormInputGroup
            label="Issue Title"
            name="title"
            value={issue.title}
            uppercase={true}
            required={false}
            readOnly={true}
            mdSize={12}
          />
          <CustomCFormTextAreaGroup
            label="Issue Description"
            name="description"
            value={issue.description}
            uppercase={true}
            required={false}
            readOnly={true}
            mdSize={12}
          />
          <CustomCFormInputGroup
            label="Branch Name"
            name="branchName"
            value={issue.branchName}
            uppercase={true}
            required={false}
            readOnly={true}
            mdSize={4}
          />
          <CustomCFormInputGroup
            label="Name"
            name="name"
            value={issue.name}
            uppercase={true}
            required={false}
            readOnly={true}
            mdSize={4}
          />
          <CustomCFormInputGroup
            label="Membership Number"
            name="membershipNo"
            value={issue.membershipNo}
            uppercase={true}
            required={false}
            readOnly={true}
            mdSize={4}
          />
          <CustomCFormInputGroup
            label="Contact Number"
            name="contactNo"
            value={issue.contactNo}
            uppercase={true}
            required={false}
            readOnly={true}
            mdSize={4}
          />
          <CustomCFormInputGroup
            label="Issue Date"
            name="issueDate"
            value={convertTZ(issue.issueDate)}
            uppercase={true}
            required={false}
            readOnly={true}
            mdSize={4}
          />
          <CustomCFormSelectGroup
            label="Issue Status"
            name="status"
            value={issue.status}
            uppercase={true}
            required={false}
            readOnly={false}
            onChange={handleChange}
            mdSize={4}
            options={[
              { label: "Pending", value: "Pending" },
              { label: "Viewed", value: "Viewed" },
              { label: "Resolved", value: "Resolved" },
            ]}
          />
          <div className="mb-3 grid grid-cols-2 md:grid-cols-3 align-middle justify-start">
            {issue?.images?.map((image, index) => (
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
          {issue.images?.length > 0 && (
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
          )}
          <div className="grid justify-end">
            <CButton
              color="primary"
              variant="outline"
              className="mr-2"
              onClick={handleSubmit}
            >
              Update
            </CButton>
          </div>
        </CForm>
      </div>
    </>
  );
};

export default IssuePage;

const initialValue = {
  title: "",
  issueDate: "",
  description: "",
  branchName: "",
  name: "",
  membershipNo: "",
  contactNo: "",
  status: "",
  images: [],
};
