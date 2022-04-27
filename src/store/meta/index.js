import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  branches: [],
  branchNameOptions: [],
};

/**
 * User slice
 */
const metaSlice = createSlice({
  name: "meta",
  initialState,
  
  reducers: {
    setBranches: (state, action) => {
      const branches = action.payload;
      state.branches = branches;
      // Set branch name options for filters
      const branchNameOptions = branches.map((branch) => ({
        value: branch.branchName,
        label: branch.branchName,
      }));
      state.branchNameOptions = branchNameOptions;
    },
  },
});

export const { setBranches } = metaSlice.actions;
export default metaSlice.reducer;


