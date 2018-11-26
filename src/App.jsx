import React from "react";
import { Route, Switch } from "react-router-dom";

import HomeView from "./components/home/HomeView.jsx";

const App = () => (
  <Switch>
    <Route path="/" component={HomeView} />
  </Switch>
);

export default App;
