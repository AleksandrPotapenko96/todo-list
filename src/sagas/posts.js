import { put, fork, take, actionChannel } from "redux-saga/effects";

import { POSTS, posts } from "../actions";

import MOCKED_DATA from "../data";

function* getPostsSaga() {
  const channel = yield actionChannel(POSTS.REQUESTED);

  while (true) {
    try {
      yield take(channel);
      yield put(posts.succeeded(MOCKED_DATA.posts));
    } catch (error) {
      yield put(posts.failed(error));
    }
  }
}

export default [fork(getPostsSaga)];
