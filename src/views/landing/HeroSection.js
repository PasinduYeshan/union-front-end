import React from "react";

const HeroSection = () => {
  return (
    <>
      <main className="mt-8 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-10">
        <div className="sm:text-center lg:text-center">
          <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl">
            <span className="block text-indigo-600 xl:inline">
              UPTO Sri Lanka
            </span>
            <span className="block xl:inline">
              Union of Post and Telecommunication Officers
            </span>{" "}
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl text-center">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
            <div className=" sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
