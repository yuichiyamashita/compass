import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// 型定義
type TimerSettingsState = {
  isDisplay: boolean;
  isStart: boolean;
  seconds: number;
  secondsLeft: number;
};
type InitialState = {
  circularCountDownTimer: TimerSettingsState;
  preparingCountDownTimer: TimerSettingsState;
};

// 初期値
const initialState: InitialState = {
  circularCountDownTimer: {
    isDisplay: false,
    isStart: false,
    seconds: 0,
    secondsLeft: 0,
  },
  preparingCountDownTimer: {
    isDisplay: false,
    isStart: false,
    seconds: 0,
    secondsLeft: 0,
  },
};

// 本体
export const countDownTimerSlice = createSlice({
  name: "countDownTimer",
  initialState,
  reducers: {
    // CircularCountDownTimer
    startCircularCountDownTimerAction: (state, action: PayloadAction<TimerSettingsState>) => {
      state.circularCountDownTimer = action.payload;
    },
    stopCircularCountDownTimerAction: (state) => {
      state.circularCountDownTimer.isStart = false;
    },
    decrementCircularCountDownTimerAction: (state, action: PayloadAction<number>) => {
      state.circularCountDownTimer.secondsLeft = action.payload;
    },
    invisibleCircularCountDownTimerAction: (state) => {
      state.circularCountDownTimer.isDisplay = false;
    },

    // PreparingCountDownTimer
    startPreparingCountDownTimerAction: (state, action: PayloadAction<TimerSettingsState>) => {
      state.preparingCountDownTimer = action.payload;
    },
    stopPreparingCountDownTimerAction: (state) => {
      state.preparingCountDownTimer.isStart = false;
    },
    decrementPreparingCountDownTimerAction: (state, action: PayloadAction<number>) => {
      state.preparingCountDownTimer.secondsLeft = action.payload;
    },
    invisiblePreparingCountDownTimerAction: (state) => {
      state.preparingCountDownTimer.isDisplay = false;
    },
  },
});

// Actions
export const {
  startCircularCountDownTimerAction,
  stopCircularCountDownTimerAction,
  decrementCircularCountDownTimerAction,
  invisibleCircularCountDownTimerAction,
  startPreparingCountDownTimerAction,
  stopPreparingCountDownTimerAction,
  decrementPreparingCountDownTimerAction,
  invisiblePreparingCountDownTimerAction,
} = countDownTimerSlice.actions;

// Reducer
export default countDownTimerSlice.reducer;

// Selectors
export const selectCircularCountDownTimer = (state: RootState): TimerSettingsState =>
  state.countDownTimer.circularCountDownTimer;
export const selectPreparingCountDownTimer = (state: RootState): TimerSettingsState =>
  state.countDownTimer.preparingCountDownTimer;
