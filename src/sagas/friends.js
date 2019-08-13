import { put, fork, take, actionChannel } from "redux-saga/effects";

import { FRIENDS, friends } from "../actions";

import MOCKED_DATA from "../data";

function* getFriendsSaga() {
  const channel = yield actionChannel(FRIENDS.REQUESTED);

  while (true) {
    try {
      yield take(channel);
      yield put(friends.succeeded(MOCKED_DATA.friends));
      
    } catch (error) {
      yield put(friends.failed(error));
    }
  }
}

export default [fork(getFriendsSaga)];
