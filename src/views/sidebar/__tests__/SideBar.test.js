import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { withRouter } from "react-router-dom";

import ConnectedSideBar, { SideBar } from "../SideBar.jsx";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const storeState = {
  user: { isAuthenticated: false }
};

const props1 = {
  isAuthenticated: false,
  location: { pathname: "/" },
  logOut: jest.fn()
};

const props2 = {
  isAuthenticated: true,
  location: { pathname: "/" },
  logOut: jest.fn()
};

it("should render without crashing when user is not authenticated", () => {
  const wrapper = shallow(<SideBar {...props1} />);
  expect(wrapper).toMatchSnapshot();
});

it("should render without crashing when user is authenticated", () => {
  const wrapper = shallow(<SideBar {...props2} />);
  expect(wrapper).toMatchSnapshot();
});

it("should change state when open is clicked", () => {
  const wrapper = shallow(<SideBar />);
  wrapper.instance().showSideBar();
  expect(wrapper.state("open")).toBe(true);
});

it("should change state when close is clicked", () => {
  const wrapper = shallow(<SideBar />);
  wrapper.instance().hideSideBar();
  expect(wrapper.state("open")).toBe(false);
});

it("should toggle sidebar", () => {
  const e = {
    target: {
      document: {
        documentElement: {
          clientWidth: 800
        }
      }
    }
  };
  const wrapper = shallow(<SideBar />);
  wrapper.instance().toggleSideBar(e);
  expect(wrapper.state("open")).toBe(true);
  e.target.document.documentElement.clientWidth = 600;
  wrapper.instance().toggleSideBar(e);
  expect(wrapper.state("open")).toBe(false);
});

it("should remove listener on component will mount", () => {
  const wrapper = shallow(<SideBar />);
  wrapper.instance().componentWillUnmount();
});

it("should synchronise with app state in the store", () => {
  const store = mockStore(storeState);
  const wrapper = shallow(<ConnectedSideBar />);
  const storeWrapper = shallow(wrapper.prop("children")({ ...props1, store }));
  expect(storeWrapper.prop("isAuthenticated")).toBe(false);
});
