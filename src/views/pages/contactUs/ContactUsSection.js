import React, { useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import Joi from "joi";
import { ReplyIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";

import store, { thunks, selectors } from "src/store";
import api from "src/api";

import {
  CustomCFormTextAreaGroup,
  CustomCFormInputGroup,
  CustomCFormSelectGroup,
  CustomCFormFilesGroup,
} from "src/components/common/CustomCInputGroup";
import { addDataToFormData, printFormData } from "src/utils/function";

const ContactUsSection = () => {
  const dispatch = useDispatch();

  // States
  const [formData, setFormData] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});

  const branchNameOptions = useSelector(selectors.meta.selectBranchNameOptions);

  // Fetch branch name options from database
  useEffect(() => {
    const fetchData = async () => {
      const res = await dispatch(thunks.meta.getBranches());
      if (res && res.status != 200) {
        console.log("Error fetching branch name options", res);
        toast.error("Error occurred. Please try again later.");
      }
    }

    fetchData().catch(err => console.log(err));
  }, []);

  // Joi validation schema
  const schema = Joi.object({
    name: Joi.string().required().label("Name"),
    membershipNo: Joi.string().required().label("Membership No"),
    contactNo: Joi.string().required().label("Contact No"),
    branchName: Joi.string().required().label("Branch Name"),
    title: Joi.string().required().label("Title"),
    description: Joi.string().min(10).required().label("Issue"),
    images: Joi.any(),
  });

  /**
   * Handlers
   */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData({ ...formData, [name]: files });
    } else {
      delete formErrors[name];
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    const { error, value } = schema.validate(formData, { abortEarly: false });
    if (!error) {
      //Issue send logic
      let fData = new FormData();
      fData = addDataToFormData(formData, fData);
      const res = await api.issue.add(fData);
      if (res && res.status === 200) {
        toast.success("Issue sent successfully.");
      } else {
        toast.error(res.message ? res.message : "Error occurred. Please try again later.");
      }
    } else {
      const errors = {};
      for (let item of error.details) {
        errors[item.path[0]] = item.message;
      }
      console.log("Erros", errors);
      setFormErrors(errors);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 align-middle h-full w-full ">
        <div className="hidden md:block align-middle m-10">
          <img
            src="images/contact-us.svg"
            className=" object-cover w-full h-full "
          />
        </div>
        <div className="flex items-center justify-center align-content-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                How can we help you?
              </h2>
            </div>
            <form
              className="mt-8 space-y-6"
              onSubmit={handleSubmit}
              method="POST"
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md">
                <CustomCFormInputGroup
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={formErrors.name}
                />
                <CustomCFormSelectGroup
                  label="Branch Name"
                  name="branchName"
                  value={formData.branchName}
                  onChange={handleChange}
                  error={formErrors.branchName}
                  options={branchNameOptions}
                />
                <CustomCFormInputGroup
                  label="Membership Number"
                  name="membershipNo"
                  value={formData.membershipNo}
                  onChange={handleChange}
                  error={formErrors.membershipNo}
                />
                <CustomCFormInputGroup
                  label="Contact Number"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  error={formErrors.contactNo}
                />
                <CustomCFormInputGroup
                  label="Issue Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  error={formErrors.title}
                />
                <CustomCFormTextAreaGroup
                  label="Issue Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  error={formErrors.description}
                />
                <CustomCFormFilesGroup
                  label="Images"
                  name="images"
                  onChange={handleChange}
                  error={formErrors.images}
                  type="file"
                  required={false}
                />
              </div>

              <div className="flex items-center justify-center text-center">
                <button
                  onSubmit={handleSubmit}
                  type="submit"
                  className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <ReplyIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Submit Your Issue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsSection;

// Initial empty strings for the form
const initialValue = {
  name: "",
  membershipNo: "",
  contactNo: "",
  title: "",
  description: "",
  branchName: "",
  images: [],
};
