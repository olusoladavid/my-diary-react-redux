import { showToast } from "../actions/toaster";
import { logOut } from "../actions/user";

const errorHandler = error => {
  const { response } = error;
  if (response && response.status === 400) {
    const errorList = response.data.error;
    const payload = errorList.map(errObj => ({ type: "error", message: errObj.message }));
    return showToast(payload);
  } else if (response && response.status === 401) {
    return logOut();
  } else if (response) {
    const payload = [{ type: "error", message: response.data.error.message }];
    return showToast(payload);
  }
  const payload = [
    {
      type: "error",
      message: "Error connecting to server.Please check your connection"
    }
  ];
  return showToast(payload);
};

export default errorHandler;
