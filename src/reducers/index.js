import { combineReducers } from "redux";

import user from "./user";
import toaster from "./toaster";
import stories from "./stories";

export default combineReducers({
  user,
  toaster,
  stories
});
