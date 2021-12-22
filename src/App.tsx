import React, { FC } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Auth from "./Auth";
import Top from "./components/container/pages/Top";
import Terms from "./components/container/pages/Terms";
import PrivacyPolicy from "./components/container/pages/PrivacyPolicy";
import About from "./components/container/pages/About";
import Login from "./components/container/pages/Login";
import Signup from "./components/container/pages/Signup";
import SendAuthEmail from "./components/container/pages/SendAuthEmail";
import CompleteSendAuthEmail from "./components/container/pages/CompleteSendAuthEmail";
import ResetPassword from "./components/container/pages/ResetPassword";
import Main from "./components/container/pages/Main";
import SelfDebate from "./components/container/pages/SelfDebate";
import FastThinking from "./components/container/pages/FastThinking";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/privacy" component={PrivacyPolicy} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/email-authentication" component={SendAuthEmail} />
        <Route exact path="/complete-send-auth-email" component={CompleteSendAuthEmail} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Auth>
          <Route exact path="/main" component={Main} />
          <Route exact path="/selfdebate" component={SelfDebate} />
          <Route exact path="/fastthinking" component={FastThinking} />
        </Auth>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
