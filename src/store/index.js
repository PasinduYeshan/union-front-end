import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import metaReducer, * as metaActions from "./meta";
import metaThunk from "./meta/thunk";
import * as metaSelectors from "./meta/select";

import userReducer, * as userActions from "./user";
import userThunk from "./user/thunk";
import * as userSelectors from "./user/select";

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
  user: userActions,
  meta: metaActions,
};

export const thunks = {
  meta: metaThunk,
  user : userThunk
};

export const selectors = {
  meta: metaSelectors,
  user: userSelectors,
}

export function accessToken(){
  return store.getState().user.tokens.access;
}
