import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { setName, SET_NAME } from "../home";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it("should dispatch set action", () => {
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(setName({ name: "Matt" }));
  const actions = store.getActions();
  const expectedPayload = { type: SET_NAME, payload: { name: "Matt" } };
  expect(actions).toEqual([expectedPayload]);
});
