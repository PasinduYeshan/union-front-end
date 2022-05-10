import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CIcon from "@coreui/icons-react";
import { CButton } from "@coreui/react";
import { cilFilter } from "@coreui/icons";

import { CustomCFormSelectGroup } from "src/components/common/CustomCInputGroup";
import { thunks , selectors} from "src/store";

const FilterTable = ({
  filterData,
  filterErrors,
  handleFilterChange,
  handleFilterSubmit,
  handleClearFilter,
}) => {
  const dispatch = useDispatch();
  const [showFilterData, setShowFilterData] = useState(false);
  
  const branchNameOptions = useSelector(selectors.meta.selectBranchNameOptions);

  // Fetch branch names
  useEffect(() => {
    dispatch(thunks.meta.getBranches());
  }, []);

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
            label="Branch Name"
            name="branchName"
            value={filterData.branchName}
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
