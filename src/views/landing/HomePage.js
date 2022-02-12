import React, { lazy } from "react";

import { CRow, CCol } from "@coreui/react";

const NavigationBar = React.lazy(() => import("./NavigationBar.js"));
const HeroSection = React.lazy(() => import("./HeroSection"));
const WordAboutUs = React.lazy(() => import("./WordAboutUs"));
const FooterComponent = React.lazy(() =>
  import("../../components/common/FooterComponent")
);
const GoogleMapLocation = React.lazy(() =>
  import("../../components/common/GoogleMapLocation")
);

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <WordAboutUs />
      <FooterComponent />
    </>
  );
};

export default HomePage;
