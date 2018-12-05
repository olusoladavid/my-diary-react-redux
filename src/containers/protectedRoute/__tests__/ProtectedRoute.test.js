import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { Route } from "react-router-dom";

import ConnectedProtectedRoute, { ProtectedRoute } from "../ProtectedRoute";
import Footer from "../../../views/footer/Footer";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const storeState = {
  user: { isAuthenticated: false }
};

function MyComponent() {
  return <div />;
}

it("renders a route without crashing", () => {
  const wrapper = shallow(<ProtectedRoute />);
  expect(wrapper.is(Route)).toEqual(true);
});

it("renders authenticated route with render prop without crashing", () => {
  const wrapper = shallow(<ProtectedRoute component={MyComponent} isAuthenticated={true} />);
  const render = wrapper.prop("render")({ location: {} });
  const renderWrapper = shallow(render);
  expect(renderWrapper.is("div")).toBe(true);
});

it("renders non authenticated route with render prop without crashing", () => {
  const wrapper = shallow(<ProtectedRoute isAuthenticated={false} />);
  const render = wrapper.prop("render")({ location: {} });
  expect(render.props.to.pathname).toEqual("/login");
});

it("should synchronise with app state in the store", () => {
  const store = mockStore(storeState);
  const wrapper = shallow(<ConnectedProtectedRoute component={Footer} isAuthenticated={true} store={store} />);
  expect(wrapper.prop("isAuthenticated")).toBe(false);
});
