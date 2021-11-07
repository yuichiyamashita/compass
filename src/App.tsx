import React, { FC } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Top } from "./components/pages/top";
import { Terms } from "./components/pages/terms";
import { PrivacyPolicy } from "./components/pages/privacy";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/privacy" component={PrivacyPolicy} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
