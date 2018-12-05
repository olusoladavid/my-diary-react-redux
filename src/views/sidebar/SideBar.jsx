import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { logOut } from "../../actions/user";

const propTypes = {
  isAuthenticated: PropTypes.bool,
  location: PropTypes.object,
  logOut: PropTypes.func
};

const defaultProps = {};

const sideBarItems = [
  { location: "/", public: true, name: "Home" },
  { location: "/signup", public: true, name: "Signup" }
];

export class SideBar extends React.Component {
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
    const { isAuthenticated, location, logOut } = this.props;
    const itemsToRender = sideBarItems
      .filter(item => !item.public === isAuthenticated)
      .filter(item => item.location !== location.pathname);
    return (
      <nav className="nav">
        <span onClick={this.showSideBar} className="nav__open-menu js-open-menu" />
        <ul className="list nav__list js-nav-list" style={{ display: open ? "block" : "none" }}>
          <li className="list__item">
            <span onClick={this.hideSideBar} className="nav__close-menu js-close-menu" />
          </li>
          {itemsToRender.map((item, index) => (
            <li key={index} className="list__item">
              <Link to={item.location} className="link nav__link">
                {item.name}
              </Link>
            </li>
          ))}
          {isAuthenticated && (
            <li className="list__item">
              <span onClick={logOut} className="link nav__link">
                Logout
              </span>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

SideBar.propTypes = propTypes;
SideBar.defaultProps = defaultProps;

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

const mapDispatchToProps = {
  logOut
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideBar)
);
