import React from "react";

const LeadersSection = React.lazy(() => import("../../../components/common/LeadersSection"));
const BranchSecretariesSection = React.lazy(() => import("./BranchSecretariesSection"));
const BranchTable = React.lazy(() => import("./BranchTable"));

const TeamSection = () => {
  return (
    <>
      <div className="container w-full mx-0 px-0">
              <LeadersSection title="Our Team" viewBtnVisibility={false} />
              <BranchSecretariesSection />
      </div>
    </>
  );
};

export default TeamSection;
