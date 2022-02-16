import React from "react";
import { Link } from "react-router-dom";

const LeaderSection = (props) => {
  const title = props.title ?? `The Talented People Behind the Scenes of the Organization`;
  const btnVisibility = props.viewBtnVisibility ?? true;
  return (
    <>
      <div className="bg-white pb-20 w-screen mx-0">
        <div className="container flex justify-center mx-0 pt-20 pb-10">
          <div className="w-full">
            <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
             {title}
            </h1>
          </div>
        </div>
        <div className="w-full bg-white px-10 pt-10">
          <div className="container mx-auto">
            <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
              <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded overflow-hidden shadow-md bg-white mx-2">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                        alt =""
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 pb-5 mt-16">
                    <div className="font-bold text-center pb-1 text-xl sm:text-2xl md:text-3xl lg:text-3xl">
                      Andres Berlin
                    </div>
                    <p className="text-gray-800 text-sm text-center">
                      Chief Executive Officer
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      0777326320
                    </p>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded overflow-hidden shadow-md bg-white mx-2">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                        alt =""
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 pb-5 mt-16">
                    <div className="font-bold text-center pb-1 text-xl sm:text-2xl md:text-3xl lg:text-3xl">
                      Silene Tokyo
                    </div>
                    <p className="text-gray-800 text-sm text-center">
                      Product Design Head
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      0777326320
                    </p>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded overflow-hidden shadow-md bg-white mx-2">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif"
                        alt =""
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 pb-5 mt-16">
                    <div className="font-bold text-center pb-1 text-xl sm:text-2xl md:text-3xl lg:text-3xl">
                      Johnson Stone
                    </div>
                    <p className="text-gray-800 text-sm text-center">
                      Manager Development
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      0777326320
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex container w-full justify-center ${btnVisibility ? "" : "hidden"} `}>
        <div className="rounded-md shadow">
              <Link
                to="/team"
                className="w-full flex items-center justify-center px-7 py-2 !border-indigo-400 border-2 text-base font-medium rounded-md text-black bg-transparent outline-slate-100 hover:scale-110 md:py-4 md:text-lg md:px-10"
              >
               View All
              </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default LeaderSection;
