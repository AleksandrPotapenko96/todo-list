import { combineReducers } from "redux";

import posts from "./posts";
import friends from "./friends"

export default combineReducers({
  posts,
  friends

});
