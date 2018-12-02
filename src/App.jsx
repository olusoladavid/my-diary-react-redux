import React from "react";
import { Route, Switch } from "react-router-dom";

import HomeView from "./views/home/HomeView.jsx";
import Header from "./views/header/Header.jsx";
import Footer from "./views/footer/Footer.jsx";
import Signup from "./views/signup/Signup.jsx";
import Toaster from "./views/toaster/Toaster.jsx";
import "./css/style.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => (
  <div className="page page--is-flex page--stretches">
    <Header />
    <Toaster />
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
    <Footer />
  </div>
);

export default App;
