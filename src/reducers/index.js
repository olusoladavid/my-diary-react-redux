import { combineReducers } from "redux";

import user from "./user";
import toaster from "./toaster";
import stories from "./stories";
import newStory from "./newStory";
import story from "./story";

export default combineReducers({
  user,
  toaster,
  stories,
  newStory,
  story
});
