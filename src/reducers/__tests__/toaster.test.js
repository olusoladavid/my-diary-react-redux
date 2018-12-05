import toaster from "../toaster";
import { SHOW_TOAST, HIDE_TOAST } from "../../actions/toaster";

const initialState = {
  visible: false,
  toasts: []
};

it("should not mutate state in store", () => {
  const action = {
    type: null,
    payload: null
  };
  expect(toaster(undefined, action)).toEqual(initialState);
});

it("should show toast", () => {
  const action = {
    type: SHOW_TOAST,
    payload: []
  };
  expect(toaster(initialState, action)).toEqual({ ...initialState, visible: true, toasts: [...action.payload] });
});

it("should hide toast", () => {
  const action = {
    type: HIDE_TOAST
  };
  expect(toaster(initialState, action)).toEqual({ ...initialState });
});
