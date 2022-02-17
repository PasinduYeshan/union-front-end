import React from "react";

const LeadersSection = React.lazy(() =>
  import("../../../components/common/LeadersSection")
);
const BranchSecretariesSection = React.lazy(() =>
  import("./BranchSecretariesSection")
);
const OtherMembersSection = React.lazy(() => import("./OtherMembersSection"));

const TeamSection = () => {
  return (
    <>
      <div className="w-full mx-0 px-0">
        <LeadersSection title="Our Team" viewBtnVisibility={false} />
        <OtherMembersSection />
        <BranchSecretariesSection />
      </div>
    </>
  );
};

export default TeamSection;
