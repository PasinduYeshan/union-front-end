import React, { lazy } from "react";

const NavigationBar = React.lazy(() => import("./NavigationBar.js"));
const HomeCarouselSlider = React.lazy(() =>
  import("../../components/common/HomeCarouselSlider")
);
const HeroSection = React.lazy(() => import("./HeroSection"));

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
    </>
  );
};

export default HomePage;
