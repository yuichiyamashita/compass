import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// 型定義
type TimerSettingsState = {
  isDisplayed: boolean;
  isStarting: boolean;
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
    isDisplayed: false,
    isStarting: false,
    seconds: 0,
    secondsLeft: 0,
  },
  preparingCountDownTimer: {
    isDisplayed: false,
    isStarting: false,
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
      state.circularCountDownTimer.isStarting = false;
    },
    decrementCircularCountDownTimerAction: (state, action: PayloadAction<number>) => {
      state.circularCountDownTimer.secondsLeft = action.payload;
    },
    invisibleCircularCountDownTimerAction: (state) => {
      state.circularCountDownTimer.isDisplayed = false;
    },

    // PreparingCountDownTimer
    startPreparingCountDownTimerAction: (state, action: PayloadAction<TimerSettingsState>) => {
      state.preparingCountDownTimer = action.payload;
    },
    stopPreparingCountDownTimerAction: (state) => {
      state.preparingCountDownTimer.isStarting = false;
    },
    decrementPreparingCountDownTimerAction: (state, action: PayloadAction<number>) => {
      state.preparingCountDownTimer.secondsLeft = action.payload;
    },
    invisiblePreparingCountDownTimerAction: (state) => {
      state.preparingCountDownTimer.isDisplayed = false;
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
export const selectIsStartingCircularTimer = (state: RootState) =>
  state.countDownTimer.circularCountDownTimer.isStarting;
export const selectIsDisplayedCircularTimer = (state: RootState) =>
  state.countDownTimer.circularCountDownTimer.isDisplayed;
export const selectSecondsCircularTimer = (state: RootState) => state.countDownTimer.circularCountDownTimer.seconds;
export const selectSecondsLeftCircularTimer = (state: RootState) =>
  state.countDownTimer.circularCountDownTimer.secondsLeft;
//
//
export const selectPreparingCountDownTimer = (state: RootState): TimerSettingsState =>
  state.countDownTimer.preparingCountDownTimer;
