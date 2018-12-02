import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import ConnectedSignup, { Signup } from "../Signup";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const storeState = {
  user: { isAuthenticated: false },
  loading: false
};

const props1 = {
  hideToast: jest.fn(),
  createUser: jest.fn(),
  showToast: jest.fn(),
  loading: false,
  isAuthenticated: false
};

const props2 = {
  ...props1,
  loading: true,
  isAuthenticated: false
};

const props3 = {
  ...props1,
  isAuthenticated: true
};

it("renders without crashing", () => {
  const wrapper = shallow(<Signup />);
  expect(wrapper).toMatchSnapshot();
});

it("renders without crashing when user is authenticated", () => {
  const wrapper = shallow(<Signup {...props3} />);
  expect(wrapper).toMatchSnapshot();
});

it("renders without crashing when user is signing up", () => {
  const wrapper = shallow(<Signup {...props2} />);
  expect(wrapper).toMatchSnapshot();
});

it("clears errors when input fields are focused", () => {
  const wrapper = shallow(<Signup {...props1} />);
  wrapper
    .find(".form__input")
    .at(0)
    .simulate("focus");
  expect(props1.hideToast).toHaveBeenCalled();
});

it("should save user input tp state", () => {
  const wrapper = shallow(<Signup {...props1} />);
  wrapper
    .find(".js-signup-email")
    .at(0)
    .simulate("change", { target: { value: "email@email.com", name: "email" } });
  expect(wrapper.state("email")).toEqual("email@email.com");
});

it("should not submit form when passwords differ", () => {
  const wrapper = shallow(<Signup {...props1} />);
  wrapper.setState({ email: "email", password: "password", repassword: "password1" });
  wrapper
    .find(".js-form-signup")
    .at(0)
    .simulate("submit", { preventDefault: jest.fn() });
  expect(props1.createUser).not.toHaveBeenCalled();
});

it("should submit form when passwords are the same", () => {
  const wrapper = shallow(<Signup {...props1} />);
  wrapper.setState({ email: "email", password: "password", repassword: "password" });
  wrapper
    .find(".js-form-signup")
    .at(0)
    .simulate("submit", { preventDefault: jest.fn() });
  expect(props1.createUser).toHaveBeenCalled();
});

it("should synchronise with app state in the store", () => {
  const store = mockStore(storeState);
  const wrapper = shallow(<ConnectedSignup {...props3} store={store} />);
  expect(wrapper.prop("isAuthenticated")).toBe(false);
});
