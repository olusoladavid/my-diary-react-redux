/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { hideToast, showToast } from "../../actions/toaster";
import { fetchStory, editStory, deleteStory } from "../../actions/story";
import transformDate from "../../utils/dateTransformer";

const propTypes = {
  hideToast: PropTypes.func,
  showToast: PropTypes.func,
  fetchStory: PropTypes.func,
  editStory: PropTypes.func,
  deleteStory: PropTypes.func,
  story: PropTypes.object,
  loading: PropTypes.string,
  match: PropTypes.object,
  history: PropTypes.object
};

const defaultProps = {};

export class Story extends React.Component {
  constructor(props) {
    super(props);
    this.title = React.createRef();
    this.content = React.createRef();
    const { match } = props;
    const { id } = match.params;
    this.state = {
      favorited: props.story.is_favorite,
      id,
      editMode: false,
      showDeleteModal: false
    };
  }

  componentDidMount() {
    const { id } = this.state;
    this.props.fetchStory(id);
  }

  handleEdit = () => {
    const { editMode } = this.state;
    if (editMode) {
      this.submitEdit();
    } else {
      this.setState({ editMode: true }, () => this.title.current.focus());
    }
  };

  toggleModal = status => {
    this.setState({ showDeleteModal: status });
  };

  doDelete = () => {
    const { id } = this.state;
    const { deleteStory, history } = this.props;
    deleteStory(id, history);
    this.toggleModal(false);
  };

  componentDidUpdate() {
    this.props.hideToast();
  }

  submitEdit = () => {
    const { editStory, showToast, loading } = this.props;
    if (loading) return;
    this.setState({ editMode: false });
    showToast([{ type: "progress", message: "Saving..." }]);
    const title = this.title.current.innerText;
    const content = this.content.current.innerText;
    const { favorited, id } = this.state;
    if (title.length < 2 || content.length < 5) {
      showToast([{ type: "error", message: "Title or content cannot be lesser than 5 characters" }]);
      return;
    }
    editStory(id, { title, content, is_favorite: favorited });
  };

  render() {
    const { editMode, showDeleteModal } = this.state;
    console.log(showDeleteModal);
    const {
      story: { title, content, created_on }
    } = this.props;
    const { day, month, year } = transformDate(created_on);
    const renderedDate = `${day} ${month.toUpperCase()} ${year}`;
    return (
      <React.Fragment>
        <div className="modal js-modal" style={{ display: showDeleteModal ? "block" : "none" }}>
          <div className="modal__body">
            <p className="modal__text">Are you sure you want to delete?</p>
            <button onClick={this.doDelete} type="button" className="button button--success js-confirm-modal">
              Confirm
            </button>
            <button
              onClick={() => this.toggleModal(false)}
              type="button"
              className="button modal__cancel-btn js-cancel-modal"
            >
              Cancel
            </button>
          </div>
        </div>
        <div>
          <div className="story js-story">
            <p className="story__date">{renderedDate}</p>
            <p ref={this.title} className="story__title js-story-title" contentEditable={editMode}>
              {title}
            </p>
            <div ref={this.content} className="story__content js-story-content" contentEditable={editMode}>
              {content}
            </div>
          </div>
          <div className="story__toolbar">
            <div className="story__fav-icon js-story-favicon">
              <svg
                aria-hidden="true"
                data-prefix="fas"
                data-icon="heart"
                className="icon js-icon-heart"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                />
              </svg>
            </div>
            <div className="toolbar__buttons">
              <button
                type="button"
                onClick={this.handleEdit}
                className="button button--success toolbar__edit-btn js-edit-story"
              >
                {editMode ? "Save" : "Edit"}
              </button>
              <button
                onClick={() => this.toggleModal(true)}
                type="button"
                className="button toolbar__delete-btn js-delete-story"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Story.propTypes = propTypes;
Story.defaultProps = defaultProps;

const mapStateToProps = state => ({
  loading: state.story.loading,
  story: state.story.story
});

const mapDispatchToProps = {
  hideToast,
  showToast,
  editStory,
  fetchStory,
  deleteStory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Story);
