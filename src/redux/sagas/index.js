import { fork } from "redux-saga/effects";
import communitySaga from "./community";
import userSaga from "./user";

export default function* rootSaga() {
  yield fork(communitySaga);
  yield fork(userSaga)
}
