import { all } from "redux-saga/effects";

import posts from "./posts";
import friends from "./friends"

export default function* sagas() {
  yield all([...friends]);
  yield all([...posts]);
  
}
