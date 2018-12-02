import React from "react";
import { Link } from "react-router-dom";

import SideBar from "../sidebar/SideBar.jsx";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__brand">
          <Link className="link" to="/">
            MyDiary
          </Link>
        </div>
        <SideBar />
      </div>
    </header>
  );
};

export default Header;
