import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import ConnectedNewStory, { NewStory } from "../NewStory";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const storeState = {
  newStory: {
    loading: false,
    created: true
  }
};

const props1 = {
  hideToast: jest.fn(),
  createStory: jest.fn(),
  showToast: jest.fn(),
  loading: false,
  newStory: jest.fn(),
  created: false
};

const props2 = {
  ...props1,
  created: true
};

const props3 = {
  ...props1,
  loading: true
};

it("renders without crashing", () => {
  const wrapper = shallow(<NewStory {...props1} />);
  expect(wrapper).toMatchSnapshot();
});

it("renders without crashing when story is created", () => {
  const wrapper = shallow(<NewStory {...props2} />);
  expect(wrapper).toMatchSnapshot();
});

it("renders without crashing when story is being created", () => {
  const wrapper = shallow(<NewStory {...props3} />);
  expect(wrapper).toMatchSnapshot();
});

it("clears errors when input fields are focused", () => {
  const wrapper = shallow(<NewStory {...props1} />);
  wrapper
    .find(".form__input")
    .at(0)
    .simulate("focus");
  expect(props1.hideToast).toHaveBeenCalled();
});

it("should save user input to state", () => {
  const wrapper = shallow(<NewStory {...props1} />);
  wrapper
    .find(".js-new-story-title")
    .at(0)
    .simulate("change", { target: { value: "title", name: "title" } });
  expect(wrapper.state("title")).toEqual("title");
});

it("should not submit form when title is lesser than 5 chars", () => {
  const wrapper = shallow(<NewStory {...props1} />);
  wrapper.setState({ title: "t", content: "c" });
  wrapper
    .find(".js-new-story")
    .at(0)
    .simulate("submit", { preventDefault: jest.fn() });
  expect(props1.createStory).not.toHaveBeenCalled();
});

it("should synchronise with app state in the store", () => {
  const store = mockStore(storeState);
  const wrapper = shallow(<ConnectedNewStory {...props1} store={store} />);
  expect(wrapper.prop("created")).toBe(true);
});
