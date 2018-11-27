import React from "react";
import { Route } from "react-router-dom";

import HomeView from "./views/home/HomeView.jsx";

const App = () => <Route path="/" component={HomeView} />;

export default App;
