import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { EffectCards } from "swiper";

// import get image from bucket util function
import { getImageFromBucket } from "../../../utils/function";

const EventCard = ({ event }) => {
  return (
    <>
      <div className="p-4 my-2 lg:mb-0 mb-8 !bg-transparent w-96 md:w-full">
        <div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper !bg-transparent"
          >
            {event.images.map((image, index) => (
              <SwiperSlide
                key={index}
                className=" !h-64 !bg-transparent px-0 sm:px-2"
              >
                <img
                  src={getImageFromBucket(image)}
                  className="w-full h-full object-cover bg-transparent"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="bg-white">
          <div className="p-4">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold">{event.title}</h2>
              <p className="text-xs text-gray-600 pl-5">{event.eventDate}</p>
            </div>
            <p className="text-xs text-gray-600 mt-2">{event.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
