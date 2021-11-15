import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  loading: {
    state: boolean;
    text: string;
  };
};

const initialState: InitialState = {
  loading: {
    state: false,
    text: "",
  },
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showLoadingAction: (state, action) => {
      state.loading.state = true;
      state.loading.text = action.payload;
    },
    hideLoadingAction: (state) => {
      state.loading.state = false;
    },
  },
});

export const { showLoadingAction, hideLoadingAction } = notificationSlice.actions;
export default notificationSlice.reducer;
