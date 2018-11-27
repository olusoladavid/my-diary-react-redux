import HomeView from "../HomeView";

it("renders without crashing", () => {
  const wrapper = shallow(<HomeView />);
  expect(wrapper.exists()).toBe(true);
});
