import React from "react";
import { Route, Switch } from "react-router-dom";

import HomeView from "./views/home/HomeView.jsx";
import Header from "./views/header/Header.jsx";
import Footer from "./views/footer/Footer.jsx";
import Signup from "./views/signup/Signup.jsx";
import Login from "./views/login/Login.jsx";
import Stories from "./views/stories/Stories.jsx";
import Toaster from "./views/toaster/Toaster.jsx";
import NewStory from "./views/newStory/NewStory.jsx";
import Story from "./views/story/Story.jsx";
import ProtectedRoute from "./containers/protectedRoute/ProtectedRoute.jsx";
import "./css/style.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => (
  <div className="page page--is-flex page--stretches">
    <Header />
    <Toaster />
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute path="/stories" component={Stories} />
      <ProtectedRoute path="/new-story" component={NewStory} />
      <ProtectedRoute path="/story/:id" component={Story} />
    </Switch>
    <Footer />
  </div>
);

export default App;
