import React from "react";
import { useState } from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const LandingCounter = () => {
    const [yoe , setYoe] = useState(74);
    const [members , setMembers] = useState(4000);
    const [branches , setBranches] = useState(27);
    const [asoFormed , setAsoFormed] = useState(1974);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 bg-white my-10">
        <div className="text-center justify-center">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div className="py-10">
                              {isVisible ? <CountUp end={yoe} start={ yoe-20} duration = '1' className = "text-black text-xl font-bold" /> : null}
              </div>
            )}
                  </VisibilitySensor>
                  <h6 className="uppercase font-normal mb-4 flex justify-center md:justify-center text-black text-xl">
               Years of Experience
              </h6>
              </div>
              <div className="text-center justify-center">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div className="py-10">
                {isVisible ? <CountUp end={members} start={ members-20}  duration = '1' className = "text-black text-xl font-bold" /> : null}
              </div>
            )}
                  </VisibilitySensor>
                  <h6 className="uppercase font-normal mb-4 flex justify-center md:justify-center text-black text-xl">
               Members
              </h6>
              </div>
              <div className="text-center justify-center">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div className="py-10">
                {isVisible ? <CountUp end={branches} start={ branches-20} duration = '1' className = "text-black text-xl font-bold" /> : null}
              </div>
            )}
                  </VisibilitySensor>
                  <h6 className="uppercase font-normal mb-4 flex justify-center md:justify-center text-black text-xl">
               Branches
              </h6>
              </div>
              <div className="text-center justify-center">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div className="py-10">
                {isVisible ? <CountUp end={asoFormed} start={ asoFormed-20} duration = '1' className = "text-black text-xl font-bold" /> : null}
              </div>
            )}
                  </VisibilitySensor>
                  <h6 className="uppercase font-normal mb-4 flex justify-center md:justify-center text-black text-xl">
               Association was Formed
              </h6>
        </div>
      </div>
    </>
  );
};

export default LandingCounter;
