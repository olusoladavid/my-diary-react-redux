import { Stories } from "../Stories";

const props1 = {
  storyList: [],
  fetchStories: jest.fn(),
  loading: false
};

const props2 = {
  ...props1,
  storyList: [{}]
};

it("renders without crashing", () => {
  const wrapper = shallow(<Stories {...props1} />);
  expect(wrapper).toMatchSnapshot();
});

it("renders without crashing", () => {
  const wrapper = shallow(<Stories {...props2} />);
  expect(wrapper).toMatchSnapshot();
});
