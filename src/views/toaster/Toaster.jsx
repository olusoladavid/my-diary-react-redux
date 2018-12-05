import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";

import { hideToast } from "../../actions/toaster";

export class Toaster extends Component {
  render() {
    const { toasts, visible, hideToast } = this.props;
    return (
      visible && (
        <div className="toast-container js-toast-container">
          <div className="toast-container__close-btn js-toast-close" onClick={hideToast}>
            &times;
          </div>
          {toasts.map((toast, index) => (
            <div key={index} className="toast js-toast">
              <span
                className={classNames(
                  "toast__text",
                  "js-toast-text",
                  { "toast--progress": toast.type === "progress" },
                  { "toast--error": toast.type === "error" }
                )}
              >
                {toast.message}
              </span>
            </div>
          ))}
        </div>
      )
    );
  }
}

Toaster.propTypes = {
  visible: PropTypes.bool.isRequired,
  toasts: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      message: PropTypes.string
    })
  ).isRequired,
  hideToast: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  visible: state.toaster.visible,
  toasts: state.toaster.toasts
});

const mapDispatchToProps = {
  hideToast
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toaster);
