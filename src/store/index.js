import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import metaReducer, * as metaActions from "./meta";
import metaThunk from "./meta/thunk";
import * as metaSelectors from "./meta/select";

import userReducer, * as userActions from "./user";
import userThunk from "./user/thunk";
import * as userSelectors from "./user/select";

import uiReducer, {
  sidebarShowSet,
  unfoldableSet,
  setSidebarShow,
  selectUnfoldable,
  selectSidebarShow,
  setUnfoldable,
} from "./ui";

const store = configureStore({
  reducer: {
    meta: metaReducer,
    user: userReducer,
    ui: uiReducer,
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
  ui: { sidebarShowSet, unfoldableSet },
};

export const thunks = {
  meta: metaThunk,
  user: userThunk,
  ui: { setSidebarShow, setUnfoldable },
};

export const selectors = {
  meta: metaSelectors,
  user: userSelectors,
  ui: { selectSidebarShow, selectUnfoldable },
};

export function accessToken() {
  const accessToken = store.getState().user.tokens.access;
  return accessToken;
}
