import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types/userState";

const initialState: UserState = {
  uid: "",
  role: "",
  email: "",
  created_at: "",
  latest_login_time: "",
  isSignedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.isSignedIn = true;
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.created_at = action.payload.created_at;
      state.latest_login_time = action.payload.latest_login_time;
    },
    logoutAction: () => {
      return { ...initialState };
    },
  },
});

export const { loginAction } = userSlice.actions;
export default userSlice.reducer;
