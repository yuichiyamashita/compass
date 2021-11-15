import React, { FC } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/scss/main.scss"; // デフォルト色の変更は _variables.scssで行う

const Notification: FC = () => {
  return <ToastContainer />;
};

export default Notification;
