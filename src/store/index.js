import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import metaReducer, { setBranchNames } from "./meta";
import MetaThunk from "./meta/thunk";

import userReducer, { setTokens, setUserData } from "./user";

const store = configureStore({
  reducer: {
    meta: metaReducer,
    user: userReducer,
  },
  // middleware: getDefaultMiddleware({
  //   thunk: true,
  //   immutableCheck: true,
  //   serializableCheck: true,
  // }),
});

export default store;

export const actions = {
  user: {
    setTokens,
    setUserData,
  },
  meta: {
    setBranchNames,
  },
};

export const thunks = {
  meta: MetaThunk,
};
