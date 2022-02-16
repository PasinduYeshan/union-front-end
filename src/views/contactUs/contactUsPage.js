import React from "react";

import { ReplyIcon } from "@heroicons/react/solid";

const FooterComponent = React.lazy(() =>
  import("../../components/common/FooterComponent")
);
const NavigationBar = React.lazy(() =>
  import("../../components/common/NavigationBar")
);
const ContactDetails = React.lazy(() => import('./ContactDetails'));

const ContactUsSection = React.lazy(() => import("./ContactUsSection"));

const ContactUsPage = () => {
  return (
    <>
      <NavigationBar activeNav="Contact Us" />
      <ContactDetails />
      <ContactUsSection />
      <FooterComponent />
    </>
  );
};

export default ContactUsPage;


