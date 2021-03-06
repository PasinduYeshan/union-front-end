import React from "react";

const ContactDetails = () => {
  return (
    <>
      <div className="w-full bg-white px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
          <div className="xl:w-1/3 sm:w-2/5 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded shadow-md bg-white mx-2 ">
                <div className="absolute -mt-20 w-full flex justify-center animate-pulse ">
                {/* <div className="h-32 w-32">
                      <img
                        src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                        alt
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div> */}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="home"
                    className="w-8 sm:w-12"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                    ></path>
                  </svg>
                </div>
                <div className="px-6 pb-3 mt-12 hover:scale-110">
                  <p className="text-gray-800 text-md text-center">Address</p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    11/4 Lotus Road <br />
                    P.O Box 15 <br /> Colombo 01 Sri Lanka
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-20 md:mb-12 xl:max-w-sm lg:w-2/5 pb-1 md:pb-0">
              <div className="rounded shadow-md bg-white mx-2">
                <div className="absolute -mt-20 w-full flex justify-center animate-pulse ">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="home"
                    className="w-8 sm:w-12 lg:w-12"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                    fill="currentColor"
                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                  ></path>
                  </svg>
                </div>
                <div className="px-6 pb-3 mt-0 hover:scale-110">
                  <p className="text-gray-800 text-md text-center">Phone Number</p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                  +94 11 202 16 87
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-10 sm:mb-10 md:mb-12 xl:max-w-sm lg:w-2/5 pb-1 md:pb-0">
              <div className="rounded shadow-md bg-white mx-2">
                <div className="absolute -mt-20 w-full flex justify-center animate-pulse ">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="home"
                    className="w-8 sm:w-12 lg:w-12"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                  </svg>
                </div>
                <div className="px-6 pb-3 mt-0 hover:scale-110">
                  <p className="text-gray-800 text-md text-center">Email Address</p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                  uptosrilanka@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
