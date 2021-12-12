import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { useSelector as rawUseSelector, TypedUseSelectorHook } from "react-redux";
import userReducer from "./slice/userSlice";
import notificationReducer from "./slice/notificationSlice";
import selfDebateReducer from "./slice/selfdebateSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer,
    selfdebate: selfDebateReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
