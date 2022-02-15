import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";

const NavigationBar = React.lazy(() =>
  import("../../../components/common/NavigationBar")
);

const FooterComponent = React.lazy(() =>
  import("../../../components/common/FooterComponent")
);

export default function LoginPage() {
  const forgotPassword = () => {};
  const login = () => {};
  return (
    <>
      <div className="h-screen">
        <NavigationBar />
        <div className="max-h-400">
          <div className="grid grid-cols-1 md:grid-cols-2 align-middle h-full w-full ">
            <div className="hidden md:block align-middle m-10">
              <img
                src="images/login.svg"
                className=" object-cover w-full h-full "
              />
            </div>
            <div className="flex items-center justify-center align-content-center px-4 sm:px-6 lg:px-8 ">
              <div className="max-w-md w-full space-y-8">
                <div>
                  <img
                    className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sign in to your account
                  </h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="rounded-md ">
                    <div className="py-2">
                      <label htmlFor="email-address" className="sr-only">
                        Membership Number
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="string"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Membership Number"
                      />
                    </div>
                    <div className="py-2">
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
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
        <FooterComponent />
      </div>
      
    </>
  );
}