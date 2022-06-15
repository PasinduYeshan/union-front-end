import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import Joi from "joi";
import { toast } from "react-toastify";
import _ from "lodash";

import { CForm, CButton, CImage, CFormSwitch, CCallout } from "@coreui/react";

import { thunks } from "src/store";
import api, { registerAccessToken } from "src/api";
import { accessToken } from "src/store";

import {
  CustomCFormInputGroup,
} from "src/components/common/CustomCInputGroup";
import { Modal } from "src/components";

/**
 * View and update committee member
 */
const CommitteeMemberPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const locationData = useLocation().state;

  const [fetchedData, setFetchedData] = useState(locationData);
  const [formData, setFormData] = useState(locationData);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const [imageViews, setImageViews] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Fetch data from server
  useEffect(() => {
    dispatch(thunks.meta.getBranches());
  }, []);

  // Joi schema
  const schema = Joi.object({
    name: Joi.string().optional().label("Name"),
    position: Joi.string().optional().label("Position"),
    contactNo: Joi.string().optional().label("Contact Number"),
    order: Joi.number().optional().label("Order"),
  });

  /*
   * Handling Button Presses
   */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    delete formErrors[name];
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    if (readOnly) return;
    const updateData = _.pick(formData, ["name", "position", "contactNo", "order"]);
    const { error, value } = schema.validate(updateData, {
      abortEarly: false,
    });
    if (!error) {
      e.preventDefault();
      if (!registerAccessToken(accessToken(), history, dispatch)) return;
      const res = await api.committeeMember.update(
        locationData.committeeMemberId,
        updateData
      );
      if (res.status == 200) {
        toast.success("Committee member is updated successfully");
        setFetchedData(formData);
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

  // Handle delete
  const handleDelete = async (e) => {
    if (readOnly) return;
    e.preventDefault();
    if (!registerAccessToken(accessToken(), history, dispatch)) return;
    const res = await api.branchSecretary.delete(locationData.committeeMemberId);
    if (res.status == 200) {
      toast.success("Committee member is deleted successfully");
      history.replace("/office/committee-member/view-all");
    } else {
      toast.error(
        res.message ? res.message : "Error occurred. Please try again later."
      );
    }
  };

  return (
    <>
      <div className="shadow border-b border-gray-200 sm:rounded-lg bg-white p-4 mb-5 row g-3">
        <div className="grid justify-end">
          <CFormSwitch
            //   size="xl"
            label="Enable Update Mode"
            id="formSwitchCheckDefault"
            checked={!readOnly}
            onChange={() => {
              setReadOnly(!readOnly);
              setFormData(fetchedData);
            }}
          />
        </div>

        <CForm className="mx-2 row g-3">
          <Modal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            successCallback={handleDelete}
            successLabel="Remove"
            title="Remove Committee Member"
            body="Are you sure you want to remove?"
          />
          {CustomCFormInputGroup({
            label: "Position",
            name: "position",
            value: formData.position,
            onChange: handleChange,
            error: formErrors.position,
            uppercase: true,
            required: false,
            readOnly: readOnly,
          })}
          {CustomCFormInputGroup({
            label: "Name",
            name: "name",
            value: formData.name,
            onChange: handleChange,
            error: formErrors.name,
            uppercase: true,
            required: false,
            readOnly: readOnly,
          })}
          {CustomCFormInputGroup({
            label: "Contact Number",
            name: "contactNo",
            value: formData.contactNo,
            onChange: handleChange,
            error: formErrors.contactNo,
            uppercase: true,
            required: false,
            readOnly: readOnly,
            mdSize: "6",
          })}
          {CustomCFormInputGroup({
            label: "Display Order",
            name: "order",
            value: formData.order,
            onChange: handleChange,
            error: formErrors.order,
            uppercase: true,
            required: false,
            readOnly: readOnly,
            type: "number",
            mdSize: "6",
          })}

          {!readOnly && (
            <div className="flex flex-row justify-end">
              <div className="justify-end">
                <CButton
                  color="primary"
                  variant="outline"
                  className="mr-2"
                  onClick={handleSubmit}
                >
                  Update
                </CButton>
              </div>
              <div className="justify-end">
                <CButton
                  color="danger"
                  variant="outline"
                  className="mr-2"
                  onClick={() => setModalVisible(true)}
                >
                  Remove
                </CButton>
              </div>
            </div>
          )}
        </CForm>
      </div>
    </>
  );
};

export default CommitteeMemberPage;

const initialValue = {
  name: "",
  branchName: "",
  contactNo: ""
};
