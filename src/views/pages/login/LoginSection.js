import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Joi from "joi";
import { LockClosedIcon } from "@heroicons/react/solid";

import { CCol } from "@coreui/react";

import { CustomCFormInputGroup } from "../../../components/common/CustomCInputGroup";

export default function LoginSection(props) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Joi validation schema
  const schema = Joi.object({
    username: Joi.string().required().label("User Name"),
    password: Joi.string().required().label("Password"),
  });

  /**
   * Handlers
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    delete formErrors[name];
    setFormData({ ...formData, [name]: value });
  };

  const handleRememberMe = (e) => {
    setRememberMe(!rememberMe);
  };

  const forgotPassword = () => {};

  const handleLogin = (e) => {
    e.preventDefault();
    const { error, value } = schema.validate(formData, { abortEarly: false });
    if (!error) {
      //Login loogic
      history.replace("/office/dashboard");
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
      <div className="container h-500 mb-16 sm:mb-16 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 align-middle h-full w-full">
          <div className="hidden md:block align-middle m-10">
            <img
              src="images/login.svg"
              className=" object-cover w-full h-full "
            />
          </div>
          <div className="flex items-center justify-center align-content-center px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-md w-full space-y-8">
              <div>
                {/* <img
                  className="mx-auto h-12 w-auto"
                  src="images/logo.png"
                  alt="Workflow"
                /> */}
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Sign in to your account
                </h2>
              </div>
              <form
                className="mt-8 space-y-6"
                onSubmit={handleLogin}
                method="POST"
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md ">
                  <div className="py-2">
                    <CustomCFormInputGroup
                      label="Username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      error={formErrors.username}
                    />
                  </div>
                  <div className="py-2">
                    <CustomCFormInputGroup
                      label="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      error={formErrors.password}
                      type="password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      onChange={handleRememberMe}
                      value={rememberMe}
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <button
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={forgotPassword}
                    >
                      Forgot your password?
                    </button>
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleLogin}
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
