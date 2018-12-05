import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import StoryCard from "./StoryCard.jsx";
import { fetchStories } from "../../actions/stories";

export class Stories extends React.Component {
  state = {
    currentView: "My Stories"
  };

  componentDidMount() {
    const { fetchStories } = this.props;
    fetchStories();
  }

  render() {
    const { storyList, loading } = this.props;
    const { currentView } = this.state;
    const emptyStory = {
      title: "You have not added any story",
      content: "Click on this card to add your first story",
      created_on: null,
      id: null
    };
    return (
      <React.Fragment>
        <div>
          <h1 className="story-list__title js-story-list-title">{currentView}</h1>
          <div className="story-list js-story-list">
            {storyList.length && !loading ? (
              storyList.map(story => <StoryCard key={story.id} story={story} />)
            ) : (
              <StoryCard story={emptyStory} link="/new-story" />
            )}
          </div>
          <div className="story-list__load-btn">
            <span href="#" className="button button--success pagination-btn js-stories-prev" data-viewable="true">
              <i className="fas fa-arrow-left" /> Prev{" "}
            </span>
            <span href="#" className="button button--success pagination-btn js-stories-more" data-viewable="true">
              More <i className="fas fa-arrow-right" />
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Stories.propTypes = {
  fetchStories: PropTypes.func,
  storyList: PropTypes.array,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  storyList: state.stories.storyList,
  loading: state.stories.loading
});

const mapDispatchToProps = {
  fetchStories
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);
