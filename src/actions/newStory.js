import errorHandler from "../utils/errorHandler";
import API from "../services/api";

export const NEW_STORY = "NEW_STORY";
export const CREATED_STORY = "CREATED_STORY";
export const CREATING_STORY = "CREATING_STORY";

export const createdStory = () => ({
  type: CREATED_STORY
});

export const creatingStory = payload => ({
  type: CREATING_STORY,
  payload
});

export const newStory = () => ({
  type: NEW_STORY
});

export const createStory = story => async dispatch => {
  try {
    dispatch(creatingStory(true));
    await API.createStory(story);
    dispatch(createdStory());
  } catch (err) {
    dispatch(errorHandler(err));
    dispatch(creatingStory(false));
  }
};
