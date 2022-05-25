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

const EventPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const eventId = useLocation().state.eventId;

  const [event, setEvent] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});

  // Fetch data from server
  useEffect(() => {
    const fetchData = async () => {
      if (!registerAccessToken(accessToken(), history, dispatch)) return;
      const res = await api.event.getByEventId(eventId);
      if (res.status != 200) {
        toast.error(
          res.message ? res.message : "Error occurred, please try again"
        );
      } else {
        setEvent({
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
      setEvent({ ...issue, [name]: files });
    } else {
      delete formErrors[name];
      setEvent({ ...issue, [name]: value });
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
        toast.success("Issue status updated successfully");
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
        {CustomCFormInputGroup({
          label: "Title",
          name: "title",
          value: member.title,
          onChange: onChange,
          error: formErrors.title,
          uppercase: true,
          required: false,
          readOnly: readOnly,
        })}
          {CustomCFormInputGroup({
          label: "Description",
          name: "description",
          value: member.description,
          onChange: onChange,
          error: formErrors.description,
          uppercase: true,
          required: false,
          readOnly: readOnly,
        })}{CustomCFormInputGroup({
          label: "Date",
          name: "date",
          value: member.date,
          onChange: onChange,
          error: formErrors.date,
          uppercase: true,
          required: false,
          readOnly: readOnly,
          type: "date",
        })}
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

export default EventPage;

const initialValue = {
  title: "",
  description: "",
  date: "",
  images: [],
};
