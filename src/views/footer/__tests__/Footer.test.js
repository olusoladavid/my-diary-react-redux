import Footer from "../Footer.jsx";

it("should render without crashing", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.exists()).toBe(true);
});
