import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { useSelector as rawUseSelector, TypedUseSelectorHook } from "react-redux";
import userReducer from "./features/userSlice";
import notificationReducer from "./features/notificationSlice";
import selfDebateReducer from "./features/selfdebateSlice";
import countDownTimerReducer from "./features/countDownTimerSlice";
import fastThinkingReducer from "./features/fastThinkingSlice";
import dialogReducer from "./features/dialogSlice";
import stepperReducer from "./features/stepperSlice";

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
