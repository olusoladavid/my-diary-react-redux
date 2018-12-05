import React from "react";
import { Route } from "react-router-dom";

import HomeView from "./views/home/HomeView.jsx";
import "./css/style.scss";

const App = () => <Route path="/" component={HomeView} />;

export default App;
