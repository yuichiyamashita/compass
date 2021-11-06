import React, { FC } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Top } from "./components/pages/top";
import { Terms } from "./components/pages/terms";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/terms" component={Terms} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
