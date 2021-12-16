import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@mui/material/styles";
import { MuiTheme } from "./assets/material-ui";

import { Notification, Loading } from "./components/molecules/notification";
import { NotificationTimer } from "./components/organisms/timer";
import "./assets/styles/destyle.css";
import "./assets/styles/style.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Notification />
      <ThemeProvider theme={MuiTheme}>
        <Loading>
          <NotificationTimer />
          <App />
        </Loading>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
