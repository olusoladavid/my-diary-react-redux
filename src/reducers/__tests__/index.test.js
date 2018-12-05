import rootReducer from "../index";

it("should update the store with initial state", () => {
  const action = {
    type: "NO_ACTION",
    payload: { name: "Matt" }
  };
  expect(rootReducer(undefined, action)).toHaveProperty("user");
});
