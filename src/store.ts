import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { useSelector as rawUseSelector, TypedUseSelectorHook } from "react-redux";
import userReducer from "./slice/userSlice";
import notificationReducer from "./slice/notificationSlice";
import selfDebateReducer from "./slice/selfdebateSlice";
import countDownTimerReducer from "./slice/countDownTimerSlice";
import fastThinkingReducer from "./slice/fastThinkingSlice";
import dialogReducer from "./slice/dialogSlice";
import stepperReducer from "./slice/stepperSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer,
    selfdebate: selfDebateReducer,
    fastThinking: fastThinkingReducer,
    countDownTimer: countDownTimerReducer,
    dialog: dialogReducer,
    stepper: stepperReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
