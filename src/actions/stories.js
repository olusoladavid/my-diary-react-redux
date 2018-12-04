import errorHandler from "../utils/errorHandler";
import API from "../services/api";
import { showProgress, hideToast } from "./toaster";

export const FETCHED_STORIES = "FETCHED_STORIES";
export const FETCHING_STORIES = "FETCHING_STORIES";

export const fetchedStories = payload => ({
  type: FETCHED_STORIES,
  payload
});

export const fetchingStories = payload => ({
  type: FETCHING_STORIES,
  payload
});

export const fetchStories = (page, size) => async dispatch => {
  try {
    dispatch(showProgress());
    dispatch(fetchingStories(true));
    const { data: stories } = await API.fetchStories(page, size);
    dispatch(fetchedStories(stories));
    dispatch(hideToast());
  } catch (err) {
    dispatch(errorHandler(err));
    dispatch(fetchingStories(false));
  }
};
