import { combineReducers } from "redux";

import user from "./user";
import toaster from "./toaster";

export default combineReducers({
  user,
  toaster
});
