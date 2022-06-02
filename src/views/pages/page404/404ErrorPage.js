import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectors } from "src/store";
// ../../../assets/images/404.svg
const Page404Error = () => {
  const history = useHistory();
  const userId = useSelector(selectors.user.selectUserId);
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src="images/404.svg"
        className="absolute h-full w-full object-cover"
      />
      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            You&#x27;re alone here
          </h1>
          <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
            404
          </p>
          <div className="flex flex-row justify-center align-middle">
            <button
              onClick={() =>
                history.push({
                  pathname: userId != "" ? "/office/dashboard" : "/",
                })
              }
              className="bg-transparent hover:bg-blue-500 text-purple-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404Error;
