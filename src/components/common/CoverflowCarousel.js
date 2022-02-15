import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
      <>
         
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper coreflow-swiper"
      >
        <SwiperSlide className="coreflow-swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" className="coreflow-swiper-slide-img"/>
        </SwiperSlide>
        <SwiperSlide className="coreflow-swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" className="coreflow-swiper-slide-img"/>
        </SwiperSlide>
        <SwiperSlide className="coreflow-swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="coreflow-swiper-slide-img"/>
        </SwiperSlide>
        <SwiperSlide className="coreflow-swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" className="coreflow-swiper-slide-img"/>
        </SwiperSlide>
        <SwiperSlide className="coreflow-swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" className="coreflow-swiper-slide-img"/>
        </SwiperSlide>
        <SwiperSlide className="coreflow-swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" className="coreflow-swiper-slide-img"/>
        </SwiperSlide>
        <SwiperSlide className="coreflow-swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" className="coreflow-swiper-slide-img"/>
        </SwiperSlide>
        <SwiperSlide className="coreflow-swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" className="coreflow-swiper-slide-img"/>
        </SwiperSlide>
        <SwiperSlide className="coreflow-swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" className="coreflow-swiper-slide-img"/>
        </SwiperSlide>
              </Swiper>
             
    </>
  );
}
