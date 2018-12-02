/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { hideToast, showToast } from "../../actions/toaster";
import { createUser } from "../../actions/user";

const propTypes = {
  hideToast: PropTypes.func,
  createUser: PropTypes.func,
  showToast: PropTypes.func,
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool
};

const defaultProps = {};

export class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    repassword: ""
  };

  clearErrors = () => {
    this.props.hideToast();
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { createUser, showToast } = this.props;
    const { email, password, repassword } = this.state;
    if (password !== repassword) {
      showToast([{ type: "error", message: "Password does not match" }]);
      return;
    }
    createUser({ email, password });
  };

  render() {
    const { email, password, repassword } = this.state;
    const { loading, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <React.Fragment>
        <div className="container">
          <div className="form-group">
            <h2 className="form-group__heading">Create an account</h2>
            <form className="form-group__form js-form-signup" onSubmit={this.handleSubmit} action="#">
              <input
                className="form__input js-signup-email"
                type="email"
                value={email}
                placeholder="email"
                name="email"
                required
                onFocus={this.clearErrors}
                onChange={this.handleInputChange}
              />
              <input
                className="form__input js-signup-password"
                type="password"
                placeholder="password"
                name="password"
                value={password}
                minLength={5}
                required
                onFocus={this.clearErrors}
                onChange={this.handleInputChange}
              />
              <input
                className="form__input js-signup-repassword"
                type="password"
                name="repassword"
                value={repassword}
                placeholder="confirm password"
                minLength={5}
                required
                onFocus={this.clearErrors}
                onChange={this.handleInputChange}
              />
              <button type="submit" className="form__btn--submit js-login-button">
                {loading ? <i className="fas fa-circle-notch fa-spin" /> : "Signup"}
              </button>
              <Link className="form__btn--alternate" to="/login">
                Login?
              </Link>
              <p className="form__error js-error-field" />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Signup.propTypes = propTypes;
Signup.defaultProps = defaultProps;

const mapStateToProps = state => ({
  loading: state.user.loading,
  isAuthenticated: state.user.isAuthenticated
});

const mapDispatchToProps = {
  hideToast,
  showToast,
  createUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
