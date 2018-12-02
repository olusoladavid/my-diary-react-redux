import Header from "../Header.jsx";

it("should render without crashing", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
