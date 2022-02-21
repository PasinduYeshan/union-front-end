import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css/bundle";

const HomeCarouselSlider = () => {
  return (
    <Swiper
      className="swiper-container h-[300px] sm:h-[400px] md:h-[500px]"
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
      effect="fade"
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide className="home-swiper-carousel">
        <img
          src="images/home-carousel/hc1.jpg"
          className="home-carousel-image"
        ></img>
      </SwiperSlide>
      <SwiperSlide className="home-swiper-carousel">
        <img
          src="images/home-carousel/hc2.jpg"
          className="home-carousel-image"
        ></img>
      </SwiperSlide>
      <SwiperSlide className="home-swiper-carousel">
        <img
          src="images/home-carousel/hc3.jpg"
          className="home-carousel-image"
        ></img>
      </SwiperSlide>
      <SwiperSlide className="home-swiper-carousel">
        <img
          src="images/home-carousel/hc4.jpg"
          className="home-carousel-image"
        ></img>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeCarouselSlider;
