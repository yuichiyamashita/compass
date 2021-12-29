import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// 型定義
type FullScreenDialogState = {
  open: boolean;
};

type InitialState = {
  fullScreenDialog: FullScreenDialogState;
};

// 初期値
const initialState: InitialState = {
  fullScreenDialog: {
    open: false,
  },
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openFullScreenDialogAction: (state, action: PayloadAction<boolean>) => {
      state.fullScreenDialog.open = action.payload;
    },
  },
});

// Actions
export const { openFullScreenDialogAction } = dialogSlice.actions;

// Reducer
export default dialogSlice.reducer;

// Selectors
export const selectFullScreenDialog = (state: RootState): FullScreenDialogState => state.dialog.fullScreenDialog;
