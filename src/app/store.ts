import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import notificationReducer from "../features/notification/notificationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
