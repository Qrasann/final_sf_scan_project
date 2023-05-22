import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  expire: null,
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
    setCredentials: (state, action) => {
      const { accessToken, expire } = action.payload;
      state.accessToken = accessToken;
      state.expire = expire;
      state.user = {
        name: "Алексей А.",
        avatar: "https://randomuser.me/api/portraits/men/79.jpg",
        tariff: "business",
      };
      state.isLoggedIn = true;
    },
  },
});

export const { logout, setCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectAccessTokenExpire = (state) => state.auth.expire;
