import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// タイマー実行の流れ
// react → store → timer → store
// 発火 → 値をセット → 起動 → 初期化

type SettingsState = {
  display: boolean;
  seconds: number;
};
type InitialState = SettingsState & { secondsLeft: number; isStart: boolean };

const initialState: InitialState = {
  isStart: false,
  display: false,
  seconds: 0,
  secondsLeft: 0,
};

export const countDownTimerSlice = createSlice({
  name: "countDownTimer",
  initialState,
  reducers: {
    setCountDownTimerSettingsAction: (state, action: PayloadAction<SettingsState>) => {
      state.display = action.payload.display;
      state.seconds = action.payload.seconds;
    },
    startCountDownTimerAction: (state, action: PayloadAction<boolean>) => {
      state.isStart = action.payload;
    },
    decrementCountAction: (state, action: PayloadAction<number>) => {
      state.secondsLeft = action.payload;
    },
  },
});

export const { startCountDownTimerAction, setCountDownTimerSettingsAction, decrementCountAction } =
  countDownTimerSlice.actions;
export default countDownTimerSlice.reducer;
