import React, { lazy } from "react";

const NavigationBar = React.lazy(() =>
  import("../../../components/common/NavigationBar")
);
const HeroSection = React.lazy(() => import("./HeroSection"));
const WordAboutUs = React.lazy(() => import("./WordAboutUs"));
const FooterComponent = React.lazy(() =>
  import("../../../components/common/FooterComponent")
);

const EventCarouselSection = React.lazy(() => import("./EventCarouselSection"));
const LandingCounter = React.lazy(() => import("./LandingCounter"));
const LeadersSection = React.lazy(() => import("../../../components/common/LeadersSection"));
const HomeCarouselSlider = React.lazy(() =>
  import("../../../components/common/HomeCarouselSlider")
);

const HomePage = () => {
  return (
    <>
      <div className="bg-slate-100">
        <div className="relative bg-white overflow-hidden">
          <NavigationBar activeNav="Home" />
          <HomeCarouselSlider />
        </div>
        <HeroSection />
        <LandingCounter />
        <WordAboutUs />
        <EventCarouselSection />
        <LeadersSection />
        <FooterComponent />
      </div>
    </>
  );
};

export default HomePage;
