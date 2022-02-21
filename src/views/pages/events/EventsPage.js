import React from "react";

const EventsSection = React.lazy(() => import("./EventsSection"));
const NavigationBar = React.lazy(() =>
  import("../../../components/common/NavigationBar")
);
const FooterComponent = React.lazy(() =>
  import("../../../components/common/FooterComponent")
);

const EventsPage = () => {
  return (
    <>
      <NavigationBar activeNav="Events"/>
      <EventsSection />
      <FooterComponent />
    </>
  );
};

export default EventsPage;
