import errorHandler from "../utils/errorHandler";
import API from "../services/api";

export const CREATED_USER = "CREATED_USER";
export const CREATING_USER = "CREATING_USER";
export const LOGOUT = "LOGOUT";

export const createdUser = payload => ({
  type: CREATED_USER,
  payload
});

export const creatingUser = payload => ({
  type: CREATING_USER,
  payload
});

export const createUser = user => async dispatch => {
  try {
    dispatch(creatingUser(true));
    const { data: newUser } = await API.createUser(user);
    localStorage.setItem("accessToken", newUser.token);
    dispatch(createdUser(newUser));
  } catch (err) {
    dispatch(errorHandler(err));
    dispatch(creatingUser(false));
  }
};

export const logOut = () => ({
  type: LOGOUT
});
