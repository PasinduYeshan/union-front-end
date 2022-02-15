import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css/bundle";

import hc1 from "../../assets/images/home-carousel/hc1.jpg";
import hc2 from "../../assets/images/home-carousel/hc2.jpg";
import hc3 from "../../assets/images/home-carousel/hc3.jpg";
import hc4 from "../../assets/images/home-carousel/hc4.jpg";

const HomeCarouselSlider = () => {
  // init Swiper:
  // const swiper = new Swiper();
  return (
    <Swiper
      className="swiper-container"
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
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {/* <SwiperSlide
        className="home-swiper-carousel"
        style={{
          backgroundImage: `url(${hc1})`,
        }}
      ></SwiperSlide> */}
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
