import { CREATED_USER, CREATING_USER, LOGOUT, LOGGED_USER, LOGGING_USER } from "../actions/user";

const initialState = {
  loading: false,
  token: null,
  isAuthenticated: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATED_USER:
      return { ...state, loading: false, token: payload.token, isAuthenticated: true };

    case CREATING_USER:
      return { ...state, loading: payload };

    case LOGOUT:
      localStorage.removeItem("accessToken");
      return { ...state, token: null, isAuthenticated: false };

    case LOGGED_USER:
      return { ...state, loading: false, token: payload.token, isAuthenticated: true };

    case LOGGING_USER:
      return { ...state, loading: payload };

    default:
      return state;
  }
};
