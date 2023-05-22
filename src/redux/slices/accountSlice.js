import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companyLimits: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccountInfo: (state, action) => {
      state.companyLimits = action.payload;
    },
  },
});

export const { setAccountInfo } = accountSlice.actions;

export default accountSlice.reducer;

export const selectCompanyLimits = (state) => state.account.companyLimits;
