import { RootState } from "./app/store";

// User
export const userAuthSelector = (state: RootState) => state.user;

// Notification
export const notificationSelector = (state: RootState) => state.notification;
