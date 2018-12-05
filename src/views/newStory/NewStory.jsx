/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { hideToast, showToast } from "../../actions/toaster";
import { createStory, newStory } from "../../actions/newStory";
import transformDate from "../../utils/dateTransformer";

const propTypes = {
  hideToast: PropTypes.func,
  showToast: PropTypes.func,
  createStory: PropTypes.func,
  newStory: PropTypes.func,
  loading: PropTypes.bool,
  created: PropTypes.bool
};

const defaultProps = {};

export class NewStory extends React.Component {
  state = {
    title: "",
    content: "",
    editMode: true
  };

  componentDidMount() {
    const { newStory } = this.props;
    newStory();
  }

  clearErrors = () => {
    this.props.hideToast();
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    const { loading } = this.props;
    if (!loading) this.setState({ [name]: value, editMode: true });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { createStory, showToast, loading } = this.props;
    if (loading) return;
    this.setState({ editMode: false });
    const { title, content } = this.state;
    if (title.length < 2 || content.length < 5) {
      showToast([{ type: "error", message: "Title or content cannot be lesser than 5 characters" }]);
      return;
    }
    createStory({ title, content, is_favorite: false });
  };

  render() {
    const { title, content, editMode } = this.state;
    const { loading, created } = this.props;
    const { day, month, year } = transformDate();
    const renderedDate = `${day} ${month.toUpperCase()} ${year}`;
    if (created && !editMode) {
      return <Redirect to="/stories" />;
    }
    return (
      <React.Fragment>
        <div className="container">
          <div className="form-group js-new-story">
            <h2 className="form-group__heading">{renderedDate}</h2>
            <form className="form-group__form" action="#" onSubmit={this.handleSubmit}>
              <input
                className="form__input js-new-story-title"
                type="text"
                name="title"
                value={title}
                placeholder="Title"
                onChange={this.handleInputChange}
                onFocus={this.clearErrors}
                required
              />
              <textarea
                placeholder="Content"
                className="form__input js-new-story-content"
                rows={12}
                cols={10}
                required
                value={content}
                name="content"
                onChange={this.handleInputChange}
                onFocus={this.clearErrors}
              />
              <button type="submit" className="form__btn--submit js-new-story-btn">
                {loading ? <i className="fas fa-circle-notch fa-spin" /> : "Save"}
              </button>
              <p className="form__error js-error-field" />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

NewStory.propTypes = propTypes;
NewStory.defaultProps = defaultProps;

const mapStateToProps = state => ({
  loading: state.newStory.loading,
  created: state.newStory.created
});

const mapDispatchToProps = {
  hideToast,
  showToast,
  createStory,
  newStory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStory);
