/* eslint-disable */

import App from "./App";

it("renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});
