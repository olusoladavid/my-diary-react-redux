import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import API from "../../services/api";

import {
  CREATED_USER,
  CREATING_USER,
  LOGOUT,
  LOGGED_USER,
  LOGGING_USER,
  createUser,
  createdUser,
  creatingUser,
  logOut,
  loggedUser,
  loggingUser,
  loginUser
} from "../user";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it("should dispatch action when user is created", () => {
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(createdUser({ token: "token" }));
  const actions = store.getActions();
  const expectedPayload = { type: CREATED_USER, payload: { token: "token" } };
  expect(actions).toEqual([expectedPayload]);
});

it("should dispatch creating_user action", () => {
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(creatingUser(true));
  const actions = store.getActions();
  const expectedPayload = { type: CREATING_USER, payload: true };
  expect(actions).toEqual([expectedPayload]);
});

it("should dispatch logout action", () => {
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(logOut());
  const actions = store.getActions();
  const expectedPayload = { type: LOGOUT };
  expect(actions).toEqual([expectedPayload]);
});

it("should dispatch create_user action", () => {
  jest.spyOn(API.axios, "post").mockResolvedValueOnce({ data: { token: "token" } });
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(createUser({ email: "email", password: "password" }));
  const actions = store.getActions();
  const expectedPayload = { type: CREATING_USER, payload: true };
  expect(actions).toContainEqual(expectedPayload);
});

it("should dispatch error when create_user rejects", () => {
  jest.spyOn(API.axios, "post").mockRejectedValueOnce({ response: { status: 400, error: [{ message: "message" }] } });
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(createUser({ email: "email", password: "password" }));
  const actions = store.getActions();
  const expectedPayload = { type: CREATING_USER, payload: true };
  expect(actions).toContainEqual(expectedPayload);
});

it("should dispatch action when user is login", () => {
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(loggedUser({ token: "token" }));
  const actions = store.getActions();
  const expectedPayload = { type: LOGGED_USER, payload: { token: "token" } };
  expect(actions).toEqual([expectedPayload]);
});

it("should dispatch logging_user action", () => {
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(loggingUser(true));
  const actions = store.getActions();
  const expectedPayload = { type: LOGGING_USER, payload: true };
  expect(actions).toEqual([expectedPayload]);
});

it("should dispatch login_user action", () => {
  jest.spyOn(API.axios, "post").mockResolvedValueOnce({ data: { token: "token" } });
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(loginUser({ email: "email", password: "password" }));
  const actions = store.getActions();
  const expectedPayload = { type: LOGGING_USER, payload: true };
  expect(actions).toContainEqual(expectedPayload);
});

it("should dispatch error when login_user rejects", () => {
  jest.spyOn(API.axios, "post").mockRejectedValueOnce({ response: { status: 400, error: [{ message: "message" }] } });
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(loginUser({ email: "email", password: "password" }));
  const actions = store.getActions();
  const expectedPayload = { type: LOGGING_USER, payload: true };
  expect(actions).toContainEqual(expectedPayload);
});
