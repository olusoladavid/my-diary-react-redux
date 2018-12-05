import React from "react";
import { Link } from "react-router-dom";

const propTypes = {};

const defaultProps = {};

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.toggleSideBar);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.toggleSideBar);
  }

  hideSideBar = () => {
    this.setState({ open: false });
  };

  showSideBar = () => {
    this.setState({ open: true });
  };

  toggleSideBar = e => {
    const { clientWidth } = e.target.document.documentElement;
    if (clientWidth > 768) {
      this.showSideBar();
    } else {
      this.hideSideBar();
    }
  };

  render() {
    const { open } = this.state;
    return (
      <nav className="nav">
        <span onClick={this.showSideBar} className="nav__open-menu js-open-menu" />
        <ul className="list nav__list js-nav-list" style={{ display: open ? "block" : "none" }}>
          <li className="list__item">
            <span onClick={this.hideSideBar} className="nav__close-menu js-close-menu" />
          </li>
          <li className="list__item">
            <Link to="/login" className="link nav__link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

SideBar.propTypes = propTypes;
SideBar.defaultProps = defaultProps;
