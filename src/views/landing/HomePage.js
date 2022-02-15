import React, { lazy } from "react";

import { CRow, CCol } from "@coreui/react";

const NavigationBar = React.lazy(() => import("./NavigationBar.js"));
const HeroSection = React.lazy(() => import("./HeroSection"));
const WordAboutUs = React.lazy(() => import("./WordAboutUs"));
const FooterComponent = React.lazy(() =>
  import("../../components/common/FooterComponent")
);

const EventCarouselSection = React.lazy(() => import("./EventCarouselSection"));
const LandingCounter = React.lazy(() => import("./LandingCounter"));



const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <LandingCounter />
      <WordAboutUs />
      <EventCarouselSection />
      <FooterComponent />
      
    </>
  );
};

export default HomePage;
