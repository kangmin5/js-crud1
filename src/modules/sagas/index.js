import { all, fork } from 'redux-saga/effects';
import { watchUsersAsync } from './userSaga';

export default function* rootSaga() {
  // console.log("Saga called-- rootsaga")
  yield all([
    fork(watchUsersAsync),

  ]);
}