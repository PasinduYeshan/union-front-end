import React, { useState } from "react";
import CIcon from "@coreui/icons-react";
import { CButton } from "@coreui/react";

import { cilFilter } from "@coreui/icons";

import { CustomCFormSelectGroup } from "src/components/common/CustomCInputGroup";

const FilterTable = ({
  filterData,
  filterErrors,
  handleFilterChange,
  handleFilterSubmit,
  bsAccounts,
  handleClearFilter,
}) => {
  const [showFilterData, setShowFilterData] = useState(false);
  return (
    <>
      <div className="mb-4 text-sm">
        <div className="grid justify-end text-sm">
          <CButton
            color="info"
            variant="outline"
            onClick={() => setShowFilterData(!showFilterData)}
          >
            <CIcon icon={cilFilter} />{" "}
            <span className="text-sm">Show Filters</span>
          </CButton>
        </div>

        <div className="row g-3 text-sm" hidden={!showFilterData}>
          <CustomCFormSelectGroup
            inputClassName="text-sm"
            hidden={!bsAccounts}
            label="Account Status"
            name="status"
            value={filterData.status}
            onChange={handleFilterChange}
            error={filterErrors.status}
            uppercase={true}
            required={false}
            mdSize={4}
            options={[
              { value: "Active", label: "Active" },
              { value: "Inactive", label: "Inactive" },
            ]}
          />
          <CustomCFormSelectGroup
            inputClassName="text-sm"
            hidden={!bsAccounts}
            label="Access Level"
            name="accountType"
            value={filterData.accountType}
            onChange={handleFilterChange}
            error={filterErrors.accountType}
            uppercase={true}
            required={false}
            mdSize={4}
            options={[
              { value: "bsEditor", label: "Editor" },
              { value: "bsViewer", label: "Viewer" },
            ]}
          />
          <CustomCFormSelectGroup
            inputClassName="text-sm"
            hidden={!bsAccounts}
            label="Branch Name"
            name="accountType"
            value={filterData.accountType}
            onChange={handleFilterChange}
            error={filterErrors.accountType}
            uppercase={true}
            required={false}
            mdSize={4}
            options={[
              { value: "bsEditor", label: "Editor" },
              { value: "bsViewer", label: "Viewer" },
            ]}
          />
        </div>
        <div className="flex flex-row justify-end">
          <div className="felx-row px-4 justify-end" hidden={!showFilterData}>
            <CButton
              color="primary"
              variant="outline"
              onClick={handleFilterSubmit}
            >
              <CIcon icon={cilFilter} /> <span className="text-sm">Filter</span>
            </CButton>
          </div>
          <div className="felx-row justify-end" hidden={!showFilterData}>
            <CButton
              color="primary"
              variant="outline"
              onClick={handleClearFilter}
            >
              <CIcon icon={cilFilter} />{" "}
              <span className="text-sm">Clear Filters</span>
            </CButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterTable;
