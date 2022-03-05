import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    branchNames: [],
};

/**
 * User slice
 */
const metaSlice = createSlice({
  name: "meta",
  initialState,
  reducers: {
    setBranchNames: (state, action) => {
      state.branchNames = action.payload;
    },
  },
});

export const { setBranchNames } = metaSlice.actions;
export default metaSlice.reducer;


