import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type UserState = {
  uid: string;
  username: string;
  role: string;
  email: string;
  created_at: string;
  updated_at: string;
  isSignedIn: boolean;
};

const initialState: UserState = {
  uid: "",
  username: "",
  role: "",
  email: "",
  created_at: "",
  updated_at: "",
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
    },
  },
});
