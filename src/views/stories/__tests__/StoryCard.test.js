import StoryCard from "../StoryCard";

const story = {
  id: 1,
  title: "title",
  content: "content",
  created_on: "2018-11-08T15:14:04.276Z"
};

it("renders story content without crashing", () => {
  const wrapper = shallow(<StoryCard story={story} />);
  expect(wrapper).toMatchSnapshot();
});

it("renders story content without crashing", () => {
  const wrapper = shallow(<StoryCard story={story} link="/link" />);
  expect(wrapper).toMatchSnapshot();
});
