import { FETCHED_STORIES, FETCHING_STORIES } from "../actions/stories";

const initialState = {
  loading: false,
  storyList: [],
  page: 0,
  limit: 0,
  count: 0
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHED_STORIES: {
      const { count, limit, page } = payload.meta;
      return { ...state, loading: false, storyList: payload.entries, page, limit, count };
    }

    case FETCHING_STORIES:
      return { ...state, loading: payload };

    default:
      return state;
  }
};
