import { RootState } from "./store";

// User
export const userAuthSelector = (state: RootState) => state.user;

// Notification
export const notificationSelector = (state: RootState) => state.notification;

// Self debate
export const selfDebateSelector = (state: RootState) => state.selfdebate;
