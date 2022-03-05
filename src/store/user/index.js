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
    accessToken: "",
    refreshToken: "",
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

// sample admin user data
const adminUserData = {
  userId: "admin12321312",
  name: "Admin",
  email: "admin@gmail.com",
  telephone: "1234567890",
  accountType: "Admin",
};

// sample branch secretary user data
const branchSecretaryUserData = {
  userId: "branchsecretary12321312",
  name: "Branch Secretary",
  email: "branchSeccratary@gmail.com",
  telephone: "1234567890",
  accountType: "Branch Secretary",
};

// sample officer user data
const officerUserData = {
  userId: "officer12321312",
  name: "Officer",
  email: "officer@gmail.com",
  telephone: "1234567890",
  accountType: "Officer",
};
