import { createSlice } from "@reduxjs/toolkit";
import { createDraftSafeSelector } from "@reduxjs/toolkit";

const initialState = {
  sidebarShow: true,
  unfoldable: false,
};

/**
 * User slice
 */
const userSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    sidebarShowSet: (state, action) => {
      state.sidebarShow = action.payload;
    },
    unfoldableSet: (state, action) => {
      state.unfoldable = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { sidebarShowSet, unfoldableSet } = userSlice.actions;

// Action Creators
export const setSidebarShow = (data) => (dispatch, getState) => {
  dispatch(sidebarShowSet(data));
};

export const setUnfoldable = (data) => (dispatch, getState) => {
  dispatch(unfoldableSet(data));
};

// Selectors
export const selectSidebarShow = createDraftSafeSelector(
    (state) => state.ui,
    (ui) => ui.sidebarShow
);

export const selectUnfoldable = createDraftSafeSelector(
    (state) => state.ui,
    (ui) => ui.unfoldable
);


