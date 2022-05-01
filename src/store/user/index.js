import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    userId: "",
    name: "",
    email: "",
    telephone: "",
    accountType: "",
  },
    // userData : adminUserData,
  tokens: {
    access: "",
    refresh: "",
  },
};

/**
 * User slice
 */
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setTokens: (state, action) => {
      state.tokens = action.payload;
    },
  },
});

export const { setUserData, setTokens } = userSlice.actions;
export default userSlice.reducer;

