import { FETCHED_STORY, LOADING_STORY } from "../actions/story";

const initialState = {
  loading: null,
  story: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHED_STORY:
      return { ...state, loading: null, story: payload };

    case LOADING_STORY:
      return { ...state, loading: payload };

    default:
      return state;
  }
};
