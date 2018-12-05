import React from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { hideToast, showToast } from "../../actions/toaster";
import { loginUser } from "../../actions/user";

const propTypes = {
  hideToast: PropTypes.func,
  loginUser: PropTypes.func,
  showToast: PropTypes.func,
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool
};

const defaultProps = {};

export class Login extends React.Component {
  state = {
    email: "",
    password: ""
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
    const { loginUser } = this.props;
    const { email, password } = this.state;
    loginUser({ email, password });
  };

  render() {
    const { email, password } = this.state;
    const { loading, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/stories" />;
    }
    return (
      <React.Fragment>
        <div className="container">
          <div className="form-group">
            <h2 className="form-group__heading">Unlock your diary</h2>
            <form className="form-group__form js-form-login" onSubmit={this.handleSubmit} action="#">
              <input
                className="form__input js-login-email"
                type="email"
                placeholder="email"
                required
                value={email}
                name="email"
                onFocus={this.clearErrors}
                onChange={this.handleInputChange}
              />
              <input
                className="form__input js-login-password"
                type="password"
                placeholder="password"
                required
                value={password}
                name="password"
                onFocus={this.clearErrors}
                onChange={this.handleInputChange}
              />
              <button type="submit" className="form__btn--submit js-login-button">
                {loading ? <i className="fas fa-circle-notch fa-spin" /> : "Login"}
              </button>
              <Link className="form__btn--alternate" to="/signup">
                Signup?
              </Link>
              <p className="form__error js-error-field" />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

const mapStateToProps = state => ({
  loading: state.user.loading,
  isAuthenticated: state.user.isAuthenticated
});

const mapDispatchToProps = {
  hideToast,
  showToast,
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
