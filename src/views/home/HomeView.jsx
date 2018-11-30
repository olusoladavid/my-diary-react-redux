import React from "react";
import { Link } from "react-router-dom";

import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";

import reminder from "../../img/remind-icon.svg";
import privacy from "../../img/lock-icon.svg";
import favorites from "../../img/heart-solid.svg";

const HomeView = () => {
  return (
    <div className="page page--is-flex page--stretches">
      <Header />
      <section className="hero hero--home">
        <div className="container">
          <h1 className="hero__title">Capture every moment.</h1>
          <p className="hero__text">Stories from your life all in one place</p>
          <div>
            <Link to="/signup" className="button button--success">
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section>
        <h1 className="feature-list__title">Features</h1>
        <div className="container">
          <div className="feature-list">
            <div className="feature-list__item">
              <img src={reminder} alt="remind-icon" className="item__image" />
              <h2 className="item__title"> Reminders </h2>
              <p className="item__desc">Choose a time and we will send you daily reminders to write in your diary.</p>
            </div>
            <div className="feature-list__item">
              <img src={privacy} alt="hashtag-icon" className="item__image" />
              <h2 className="item__title"> Privacy </h2>
              <p className="item__desc">Your stories are yours and yours alone. We will never share your data.</p>
            </div>
            <div className="feature-list__item">
              <img src={favorites} alt="fav-icon" className="item__image" />
              <h2 className="item__title"> Favorites </h2>
              <p className="item__desc">Easily find your favorite memories and be happy again</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomeView;
