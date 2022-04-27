import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const selectBranches = createDraftSafeSelector(
  (state) => state.meta,
  (meta) => meta.branchNames
);

export const selectBranchNameOptions = createDraftSafeSelector(
  (state) => state.meta,
  (meta) => meta.branchNameOptions
);

