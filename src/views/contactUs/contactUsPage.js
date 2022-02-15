import React from "react";

import { ReplyIcon } from "@heroicons/react/solid";

const FooterComponent = React.lazy(() =>
  import("../../components/common/FooterComponent")
);
const NavigationBar = React.lazy(() =>
  import("../../components/common/NavigationBar")
);

const ContactUsPage = () => {
  return (
    <>
      <NavigationBar activeNav="Contact Us" />
      <div className="h-full">
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
              <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md">
                  <div className="pb-2">
                    <label htmlFor="membership-no" className="">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="string"
                      autoComplete="First Name"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder=""
                    />
                  </div>
                  <div className="pb-2">
                    <label htmlFor="membership-no" className="">
                      Membership Number
                    </label>
                    <input
                      id="membership-no"
                      name="membership-no"
                      type="string"
                      autoComplete="Membership Number"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder=""
                    />
                  </div>
                  <div className="pb-2">
                    <label htmlFor="contact-no" className="">
                      Contact Number
                    </label>
                    <input
                      id="contact-no"
                      name="contact-no"
                      type="string"
                      autoComplete="Contact Number"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder=""
                    />
                  </div>
                  <div className="pb-2">
                    <label htmlFor="issue" className="">
                      Issue
                    </label>
                    <textarea
                      id="issue"
                      name="issue"
                      type="string"
                      autoComplete="Issue"
                      rows={6}
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center text-center">
                  <button
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
          </div>{" "}
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default ContactUsPage;


