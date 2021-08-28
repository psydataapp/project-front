import { fork } from "redux-saga/effects";
import communitySaga from "./community";

export default function* rootSaga() {
  yield fork(communitySaga);
}
