import API from "../api";

it("should be initialized with the base URL of the api", () => {
  expect(API.axios.defaults.baseURL).toEqual("https://my-diary-backend.herokuapp.com/api/v1");
});

it("should use interceptor when making a request", () => {
  jest.spyOn(API, "setToken").mockReturnValueOnce({});
  expect(API.interceptor({})).toEqual({});
});

it("should set token when passed request config", () => {
  expect(API.setToken({ headers: { Authorization: null } })).toEqual({ headers: { Authorization: "Bearer null" } });
});
