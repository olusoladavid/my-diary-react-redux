import errorHandler from "../errorHandler";

const error1 = { response: { status: 400, data: { error: [{ message: "message" }] } } };
const error2 = { response: { status: 401, error: [{ message: "message" }] } };
const error3 = { response: { status: 500, data: { error: { message: "internal error" } } } };
const error4 = { request: {} };

it("should handle 400 errors and return toast action", () => {
  expect(errorHandler(error1)).toHaveProperty("type", "SHOW_TOAST");
});

it("should handle 401 errors and return logout action", () => {
  expect(errorHandler(error2)).toHaveProperty("type", "LOGOUT");
});

it("should handle other http errors and return toast action", () => {
  expect(errorHandler(error3)).toHaveProperty("type", "SHOW_TOAST");
});

it("should handle request errors and return toast action", () => {
  expect(errorHandler(error4)).toHaveProperty("type", "SHOW_TOAST");
});
