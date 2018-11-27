import user from "../user";

it("should update the store with initial state", () => {
  const action = {
    type: "NO_ACTION",
    payload: { name: "Matt" }
  };
  expect(user(undefined, action)).toEqual({ name: "Olusola" });
});

it("should update the store with new state", () => {
  const state = {
    name: "sola"
  };
  const action = {
    type: "SET_NAME",
    payload: { name: "Matt" }
  };
  expect(user(state, action)).toEqual({ name: "Matt" });
});
