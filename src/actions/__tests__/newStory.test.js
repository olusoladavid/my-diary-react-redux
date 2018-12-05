import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import API from "../../services/api";

import {
  CREATED_STORY,
  CREATING_STORY,
  NEW_STORY,
  newStory,
  createStory,
  createdStory,
  creatingStory
} from "../newStory";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it("should dispatch action when story is created", () => {
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(createdStory());
  const actions = store.getActions();
  const expectedPayload = { type: CREATED_STORY };
  expect(actions).toEqual([expectedPayload]);
});

it("should dispatch creating_story action", () => {
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(creatingStory(true));
  const actions = store.getActions();
  const expectedPayload = { type: CREATING_STORY, payload: true };
  expect(actions).toEqual([expectedPayload]);
});

it("should dispatch newStory action", () => {
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(newStory());
  const actions = store.getActions();
  const expectedPayload = { type: NEW_STORY };
  expect(actions).toEqual([expectedPayload]);
});

it("should dispatch create_story action", () => {
  jest.spyOn(API.axios, "post").mockResolvedValueOnce({});
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(createStory({ title: "title", content: "content" }));
  const actions = store.getActions();
  const expectedPayload = { type: CREATING_STORY, payload: true };
  expect(actions).toContainEqual(expectedPayload);
});

it("should dispatch error when create_user rejects", () => {
  jest.spyOn(API.axios, "post").mockRejectedValueOnce({ response: { status: 400, error: [{ message: "message" }] } });
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(createStory({ title: "title", content: "content" }));
  const actions = store.getActions();
  const expectedPayload = { type: CREATING_STORY, payload: true };
  expect(actions).toContainEqual(expectedPayload);
});
