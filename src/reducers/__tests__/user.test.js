import user from "../user";

const initialState = {
  loading: false,
  token: null,
  isAuthenticated: false
};

it("should not mutate state in store", () => {
  const action = {
    type: null,
    payload: null
  };
  expect(user(undefined, action)).toEqual(initialState);
});

it("should update the store with created user", () => {
  const action = {
    type: "CREATED_USER",
    payload: { token: "token" }
  };
  expect(user(initialState, action)).toEqual({
    ...initialState,
    loading: false,
    token: action.payload.token,
    isAuthenticated: true
  });
});

it("should update the store when creating user", () => {
  const action = {
    type: "CREATING_USER",
    payload: true
  };
  expect(user(initialState, action)).toEqual({
    ...initialState,
    loading: true
  });
});

it("should log user out by updating state", () => {
  const action = {
    type: "LOGOUT"
  };
  expect(user(initialState, action)).toEqual({
    ...initialState,
    token: null,
    isAuthenticated: false
  });
});
