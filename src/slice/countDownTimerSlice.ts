import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CircularCountDownTimer = {
  circularContDownTimer: {
    isDisplay: boolean;
    isStart: boolean;
    seconds: number;
    secondsLeft: number;
  };
};

type PreparingCountDownTimer = {
  preparingCountDownTimer: {
    isDisplay: boolean;
    isStart: boolean;
    seconds: number;
    secondsLeft: number;
  };
};

type InitialState = CircularCountDownTimer & PreparingCountDownTimer;

const initialState: InitialState = {
  circularContDownTimer: {
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

export const countDownTimerSlice = createSlice({
  name: "countDownTimer",
  initialState,
  reducers: {
    startCircularCountDownTimerAction: (state, action: PayloadAction<CircularCountDownTimer>) => {
      state.circularContDownTimer = action.payload.circularContDownTimer;
    },
    stopCircularCountDownTimerAction: (state) => {
      state.circularContDownTimer.isStart = false;
    },
    decrementCircularCountDownTimerAction: (state, action: PayloadAction<number>) => {
      state.circularContDownTimer.secondsLeft = action.payload;
    },

    startPreparingCountDownTimerAction: (state, action: PayloadAction<PreparingCountDownTimer>) => {
      state.preparingCountDownTimer = action.payload.preparingCountDownTimer;
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

export const {
  startCircularCountDownTimerAction,
  stopCircularCountDownTimerAction,
  decrementCircularCountDownTimerAction,
  startPreparingCountDownTimerAction,
  stopPreparingCountDownTimerAction,
  decrementPreparingCountDownTimerAction,
  invisiblePreparingCountDownTimerAction,
} = countDownTimerSlice.actions;
export default countDownTimerSlice.reducer;
