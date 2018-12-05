import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import ConnectedToaster, { Toaster } from "../Toaster";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const storeState = {
  toaster: {
    visible: false,
    toasts: []
  }
};

const props1 = {
  visible: true,
  toasts: [{ type: "error", message: "error" }],
  hideToast: jest.fn()
};

const props2 = {
  visible: false,
  toasts: [{ type: "progress", message: "progress" }],
  hideToast: jest.fn()
};

it("renders without crashing when visible", () => {
  const wrapper = shallow(<Toaster {...props1} />);
  expect(wrapper).toMatchSnapshot();
});

it("does not render when not visible", () => {
  const wrapper = shallow(<Toaster {...props2} />);
  expect(wrapper).toMatchSnapshot();
});

it("should synchronise with app state in the store", () => {
  const store = mockStore(storeState);
  const wrapper = shallow(<ConnectedToaster {...props1} store={store} />);
  expect(wrapper.prop("visible")).toBe(false);
});
