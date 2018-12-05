import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import API from "../../services/api";

import { HIDE_TOAST, hideToast } from "../toaster";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it("should dispatch hide_toast action", () => {
  const initialState = {};
  const store = mockStore(initialState);
  store.dispatch(hideToast());
  const actions = store.getActions();
  const expectedPayload = { type: HIDE_TOAST };
  expect(actions).toEqual([expectedPayload]);
});
