import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/scss/main.scss"; // デフォルト色の変更は _variables.scssで行うこと

const Notification: React.FC = () => {
  return <ToastContainer />;
};

export default Notification;
