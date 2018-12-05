import { combineReducers } from "redux";

import user from "./user";
import toaster from "./toaster";
import stories from "./stories";
import newStory from "./newStory";

export default combineReducers({
  user,
  toaster,
  stories,
  newStory
});
