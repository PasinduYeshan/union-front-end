import React from "react";
import { Link } from "react-router-dom";

const CoverflowCarousel = React.lazy(() =>
  import("../../../components/common/CoverflowCarousel")
);

const images = [
  "images/event-carousel/1.jpg",
  "images/event-carousel/2.jpg",
  "images/event-carousel/3.jpg",
  "images/event-carousel/4.jpg",
  "images/event-carousel/5.jpg",
  "images/event-carousel/6.jpg",
  "images/event-carousel/7.jpg",
  "images/event-carousel/8.jpg",
];

const EventCarouselSection = () => {
  return (
    <>
      <div className="bg-gray-900 event-carousel">
        <h1
          className="text-2xl tracking-tight font-semibold text-white sm:text-2xl md:text-3xl"
          id="home-event-headline"
        >
          <span className="block xl:inline">Events</span>
        </h1>
        <CoverflowCarousel images={images} />
        <div className="flex mt-5 sm:mt-8 justify-center">
          <div className="rounded-md shadow">
            <Link
              to="/events"
              // className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              className="w-full flex items-center justify-center px-7 py-2 !border-indigo-400 border-2 text-base font-medium rounded-md text-white bg-transparent outline-slate-100 
                hover:scale-110 md:py-4 md:text-lg md:px-10"
            >
              More Events
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCarouselSection;
