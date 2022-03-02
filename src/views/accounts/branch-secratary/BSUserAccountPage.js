import React from "react";

import { CustomCFormInputGroup } from "src/components/common/CustomCInputGroup";

const BSUserAccountPage = () => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  return (
    <>
      <div className="shadow sm:rounded-lg bg-white p-4 mb-5 row g-3">
        <h1 className="text-xl font-semibold mb-3">Personal Details</h1>
        <div className="row g-3">
          <CustomCFormInputGroup
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={formErrors.name}
            uppercase={true}
          />
        </div>
      </div>
    </>
  );
};

export default BSUserAccountPage;
