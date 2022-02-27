import React from "react";

import { CButton } from "@coreui/react";

const StepperControl = ({
  currentStep,
  handlePreviousBtn,
  handleNextBtn,
  maxSteps,
}) => {
  return (
    <>
      <div className="flex justify-between mt-4 mb-4 !bg-white">
        {/* back button  */}
        <CButton
          color="primary"
          variant="outline"
          onClick={handlePreviousBtn}
          disabled={currentStep <= 1 ? true : false}
        >
          Previous
        </CButton>

        <CButton
          color="primary"
          variant="outline"
          onClick={handleNextBtn}
          disabled={currentStep >= maxSteps ? true : false}
        >
          Next
        </CButton>
      </div>
    </>
  );
};

export default StepperControl;
