import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const selectBranchNames = createDraftSafeSelector(
  (state) => state.meta,
  (meta) => meta.branchNames
);

