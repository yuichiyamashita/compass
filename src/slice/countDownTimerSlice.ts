import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// タイマー実行の流れ
// react → store → timer → store
// 発火 → 値をセット → 起動 → 初期化

type SettingsState = {
  display: boolean;
  seconds: number;
};
type InitialState = SettingsState & { secondsLeft: number };

const initialState: InitialState = {
  display: false,
  seconds: 0,
  secondsLeft: 0,
};

export const countDownTimerSlice = createSlice({
  name: "countDownTimer",
  initialState,
  reducers: {
    setCountDownTimerAction: (state, action: PayloadAction<SettingsState>) => {
      state.display = action.payload.display;
      state.seconds = action.payload.seconds;
    },
    decrementCountAction: (state, action: PayloadAction<number>) => {
      state.secondsLeft = action.payload;
    },
  },
});

export const { setCountDownTimerAction, decrementCountAction } = countDownTimerSlice.actions;
export default countDownTimerSlice.reducer;
