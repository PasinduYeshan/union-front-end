import React from "react";

const NavigationBar = React.lazy(() =>
  import("../../../components/common/NavigationBar")
);
const FooterComponent = React.lazy(() =>
  import("../../../components/common/FooterComponent")
);
const TeamSection = React.lazy(() => import("./TeamSection.js"));

const TeamPage = () => {
  return (
    <>
      <div className="bg-white">
        <NavigationBar />
        <TeamSection />

        <FooterComponent />
      </div>
    </>
  );
};

export default TeamPage;
