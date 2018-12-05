import newStory from "../newStory";

const initialState = {
  loading: false,
  created: false
};

it("should not mutate state in store", () => {
  const action = {
    type: null
  };
  expect(newStory(undefined, action)).toEqual(initialState);
});

it("should update the store when story is created", () => {
  const action = {
    type: "CREATED_STORY"
  };
  expect(newStory(initialState, action)).toEqual({
    ...initialState,
    loading: false,
    created: true
  });
});

it("should update the store when creating story", () => {
  const action = {
    type: "CREATING_STORY",
    payload: true
  };
  expect(newStory(initialState, action)).toEqual({
    ...initialState,
    loading: true
  });
});

it("should init the state when user starts story creation", () => {
  const action = {
    type: "NEW_STORY"
  };
  expect(newStory(initialState, action)).toEqual({
    ...initialState
  });
});
