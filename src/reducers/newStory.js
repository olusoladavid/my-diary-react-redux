import { CREATED_STORY, CREATING_STORY, NEW_STORY } from "../actions/newStory";

const initialState = {
  loading: false,
  created: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATED_STORY:
      return { ...state, loading: false, created: true };

    case CREATING_STORY:
      return { ...state, loading: payload };

    case NEW_STORY:
      return { ...state, loading: false, created: false };

    default:
      return state;
  }
};
