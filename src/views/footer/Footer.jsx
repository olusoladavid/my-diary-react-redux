import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h4>
          {" "}
          Built with ❤ by
          <Link className="link" to="https://twitter.com/olusola_dev">
            {" "}
            Olusola
          </Link>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
