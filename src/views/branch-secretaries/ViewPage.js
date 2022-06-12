import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import Joi from "joi";
import { toast } from "react-toastify";
import _ from "lodash";

import { CForm, CButton, CImage, CFormSwitch, CCallout } from "@coreui/react";

import { selectors, thunks } from "src/store";
import api, { registerAccessToken } from "src/api";
import { accessToken } from "src/store";
import {
  saveImg,
  getImageFromBucket,
  convertTZ,
  getUpdatedDataOnly,
  addDataToFormData,
} from "../../utils/function";

import {
  CustomCFormInputGroup,
  CustomCFormFilesGroup,
  CustomCFormSelectGroup,
} from "src/components/common/CustomCInputGroup";
import { Modal } from "src/components";

/**
 * View and update branch secretary
 */
const LeaderPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const locationData = useLocation().state;

  const branchNameOptions = useSelector(selectors.meta.selectBranchNameOptions);

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
    branchName: Joi.string().optional().label("Branch Name"),
    contactNo: Joi.date().optional().label("Contact Number"),
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
    const updateData = _.pick(formData, ["name", "branchName", "contactNo"]);
    const { error, value } = schema.validate(updateData, {
      abortEarly: false,
    });
    if (!error) {
      e.preventDefault();
      if (!registerAccessToken(accessToken(), history, dispatch)) return;
      const res = await api.branchSecretary.update(
        locationData.branchSecId,
        updateData
      );
      if (res.status == 200) {
        toast.success("Branch secretary updated successfully");
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
    const res = await api.leader.delete(locationData.leaderId);
    if (res.status == 200) {
      toast.success("Branch secretary deleted successfully");
      history.replace("/office/branch-secretary/view-all");
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
            title="Remove Branch Secretary"
            body="Are you sure you want to remove?"
          />
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
          {CustomCFormSelectGroup({
            label: "Branch Name",
            name: "branchName",
            value: formData.branchName,
            onChange: handleChange,
            error: formErrors.branchName,
            uppercase: true,
            required: false,
            readOnly: readOnly,
            options: branchNameOptions,
            mdSize: "6",
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

export default LeaderPage;

const initialValue = {
  name: "",
  branchName: "",
  contactNo: ""
};
