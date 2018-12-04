import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import transformDate from "../../utils/dateTransformer";

const StoryCard = ({ story: { id, title, content, created_on }, link }) => {
  const { day, month, year } = transformDate(created_on);
  return (
    <figure className="story-list__item">
      <div className="item__holder" />
      <div className="item__date">
        <span className="date__span date__day">{day}</span>
        <span className="date__span date__month">{month.substring(0, 3).toUpperCase()}</span>
        <span className="date__span date__year">{year}</span>
      </div>
      <figcaption className="item__caption">
        <h3 className="caption__text caption__title">{title}</h3>
        <p className="caption__text caption__content">{content.substring(0, 100)}</p>
      </figcaption>
      <div className="item__overlay">Read Story</div>
      <Link className="link item__link" to={link || `story.html?id=${id}`} />
    </figure>
  );
};

StoryCard.propTypes = {
  story: PropTypes.object.isRequired,
  link: PropTypes.string
};

export default StoryCard;
