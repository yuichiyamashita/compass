import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Top } from "./components/pages";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Top} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
