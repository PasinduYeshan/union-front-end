import React from "react";

const AboutUsSection = React.lazy(() => import("./AboutUsSection"));
const NavigationBar = React.lazy(() =>
  import("../../../components/common/NavigationBar")
);
const FooterComponent = React.lazy(() =>
  import("../../../components/common/FooterComponent")
);

const AboutUsPage = () => {
  return (
    <>
      <NavigationBar activeNav="About" />
      <AboutUsSection />
      <FooterComponent />
    </>
  );
};

export default AboutUsPage;
