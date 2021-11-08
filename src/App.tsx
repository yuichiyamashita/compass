import React, { FC } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Top } from "./components/pages/top";
import { Terms } from "./components/pages/terms";
import { PrivacyPolicy } from "./components/pages/privacy";
import { About } from "./components/pages/about";
import { Login } from "./components/pages/login";
import { Signup } from "./components/pages/signup";

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
      </Switch>
    </BrowserRouter>
  );
};

export default App;
