import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const selectUserData = createDraftSafeSelector(
  (state) => state.user,
  (user) => user.userData
);

export const selectTokens = createDraftSafeSelector(
  (state) => state.user,
  (user) => user.tokens
);

export const selectAccountType = createDraftSafeSelector(
  (state) => state.user,
  (user) => user.userData.accountType
);

export const selectUserId = createDraftSafeSelector(
  (state) => state.user,
  (user) => user.userData.userId
);