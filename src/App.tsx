import React, { FC } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Auth from "./Auth";
import { Top } from "./components/pages/top";
import { Terms } from "./components/pages/terms";
import { PrivacyPolicy } from "./components/pages/privacy";
import { About } from "./components/pages/about";
import { Login } from "./components/pages/login";
import { Signup, SendAuthEmail, CompleteSendAuthEmail } from "./components/pages/signup";
import { ResetPassword } from "./components/pages/reset-password";
import { Main } from "./components/pages/main";

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
          <Route path="/main" component={Main} />
        </Auth>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
