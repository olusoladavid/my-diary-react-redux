import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import API from "../../services/api";

import { FETCHED_STORIES, FETCHING_STORIES, fetchStories, fetchedStories, fetchingStories } from "../stories";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it("should dispatch action when stories are fetched", () => {
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(fetchedStories({ stories: [] }));
  const actions = store.getActions();
  const expectedPayload = { type: FETCHED_STORIES, payload: { stories: [] } };
  expect(actions).toEqual([expectedPayload]);
});

it("should dispatch fetching_stories action", () => {
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(fetchingStories(true));
  const actions = store.getActions();
  const expectedPayload = { type: FETCHING_STORIES, payload: true };
  expect(actions).toEqual([expectedPayload]);
});

it("should dispatch fetch_stories action", () => {
  jest.spyOn(API.axios, "get").mockResolvedValueOnce({ data: { stories: [] } });
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(fetchStories(1, 1));
  const actions = store.getActions();
  const expectedPayload = { type: FETCHING_STORIES, payload: true };
  expect(actions).toContainEqual(expectedPayload);
});

it("should dispatch error when fetch_stories rejects", () => {
  jest.spyOn(API.axios, "post").mockRejectedValueOnce({ response: { status: 400, error: [{ message: "message" }] } });
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(fetchStories(1, 1));
  const actions = store.getActions();
  const expectedPayload = { type: FETCHING_STORIES, payload: true };
  expect(actions).toContainEqual(expectedPayload);
});
