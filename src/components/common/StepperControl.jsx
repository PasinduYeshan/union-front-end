import React from "react";

import { CButton } from "@coreui/react";

const StepperControl = ({
  currentStep,
  handlePreviousBtn,
  handleNextBtn,
  maxSteps,
  submitBtnText,
  readOnly,
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

        {submitBtnText ? (
          <CButton color="primary" variant="outline" onClick={handleNextBtn}>
            {currentStep >= maxSteps ? submitBtnText : "Next"}
          </CButton>
        ) : (
          <CButton
            color="primary"
            variant="outline"
            onClick={async (e) => handleNextBtn(e)}
            disabled={currentStep >= maxSteps && readOnly || currentStep > maxSteps && !readOnly ? true : false }
          >
              {currentStep == maxSteps && !readOnly ? "Submit" : "Next" }
          </CButton>
        )}
      </div>
    </>
  );
};

export default StepperControl;
