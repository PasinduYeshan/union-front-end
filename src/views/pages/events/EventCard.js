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
      <div className="px-4 py-2 my-2 w-100  md:w-80 lg:w-100 lg:mb-0 mb-8">
        <div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {event.images.map((image, index) => (
              <SwiperSlide>
                <img src={getImageFromBucket(image)} className="w-full max-h-full" />
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
