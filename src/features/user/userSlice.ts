import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type UserState = {
  user: {
    uid: string;
    username: string;
    role: string;
    email: string;
    created_at: string;
    updated_at: string;
    isSignedIn: boolean;
  };
};

const initialState: UserState = {
  user: {
    uid: "",
    username: "",
    role: "",
    email: "",
    created_at: "",
    updated_at: "",
    isSignedIn: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
