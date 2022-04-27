import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CIcon from "@coreui/icons-react";
import { CButton } from "@coreui/react";
import { thunks, selectors } from "src/store";

import { cilFilter } from "@coreui/icons";

import { CustomCFormSelectGroup } from "src/components/common/CustomCInputGroup";

const FilterTable = ({
  filters,
  filterErrors,
  handleFilterChange,
  handleFilterSubmit,
  bsAccounts,
  handleClearFilter,
}) => {
  const dispatch = useDispatch();
  const [showFilterData, setShowFilterData] = useState(false);
  const [loading, setLoading] = useState(false);

  const branchNameOptions = useSelector(selectors.meta.selectBranchNameOptions);

  // Fetch branch names and set branches
  useEffect(() => {
    const setBranchNames = async () => {
      setLoading(true);
      const res = await dispatch(thunks.meta.getBranches("test"));
      if (res.status != 200) {
        toast.error("Check your internet connection");
        setLoading(false);
        return;
      }
      if (res.data) {
        const branchNameOptions = res.data.map((branch) => ({
          value: branch.branchName,
          label: branch.branchName,
        }));
        setBranchNameOptions(branchNameOptions);
      }
    };

    setBranchNames().catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="mb-4 text-sm">
        <div className="grid justify-end text-sm mb-3">
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
            value={filters.status}
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
            value={filters.accountType}
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
            name="branchName"
            value={filters.branchName}
            onChange={handleFilterChange}
            error={filterErrors.branchName}
            uppercase={true}
            required={false}
            mdSize={4}
            options={branchNameOptions}
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
