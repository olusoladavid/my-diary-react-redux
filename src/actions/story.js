import errorHandler from "../utils/errorHandler";
import API from "../services/api";
import { showProgress, hideToast } from "./toaster";

export const FETCHED_STORY = "FETCHED_STORY";
export const LOADING_STORY = "LOADING_STORY";

export const fetchedStory = payload => ({
  type: FETCHED_STORY,
  payload
});

export const loadingStory = payload => ({
  type: LOADING_STORY,
  payload
});

export const fetchStory = id => async dispatch => {
  try {
    dispatch(loadingStory("fetch"));
    dispatch(showProgress());
    const { data: story } = await API.fetchStory(id);
    dispatch(fetchedStory(story));
    dispatch(hideToast());
  } catch (err) {
    dispatch(errorHandler(err));
    dispatch(loadingStory(null));
  }
};

export const editStory = (id, edit) => async dispatch => {
  try {
    dispatch(loadingStory("edit"));
    const { data: story } = await API.editStory(id, edit);
    dispatch(fetchedStory(story));
  } catch (err) {
    dispatch(errorHandler(err));
    dispatch(loadingStory(null));
  }
};

export const deleteStory = (id, history) => async dispatch => {
  try {
    dispatch(loadingStory("delete"));
    await API.deleteStory(id);
    history.replace("/stories");
  } catch (err) {
    dispatch(errorHandler(err));
    dispatch(loadingStory(null));
  }
};
