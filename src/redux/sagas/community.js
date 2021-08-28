import { takeEvery, call, put } from "redux-saga/effects";
import api from "../../api/community";

function* addBoard(action) {
  console.log("--sagas-");
  try {
    const result = yield call(api.add, action.payload);
    console.log(result);
    yield put({
      type: "ADD_BOARD_SUCCEEDED",
      payload: { id: result.data.id, ...action.payload },
    });
  } catch (e) {
    alert(e.message);
  }
}

function* fetchBoard(action) {
  try {
    const result = yield call(api.fetch);
    yield put({ type: "FETCH_BOARD_SUCCEEDED", payload: result.data });
  } catch (e) {
    alert(e.message);
  }
}

function* removeBoard(action) {
  console.log("remove");
  try {
    const result = yield call(api.remove, action.payload);
    console.log(result);
    yield put({
      type: "REMOVE_BOARD_SUCCEEDED",
      payload: action.payload,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* modifyBoard(action) {
  try {
    const result = yield call(api.modify, action.payload);
    console.log("modify-saga");
    console.log(result);
    yield put({
      type: "MODIFY_BOARD_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* communitySaga() {
  yield takeEvery("ADD_BOARD", addBoard);
  yield takeEvery("FETCH_BOARD", fetchBoard);
  yield takeEvery("REMOVE_BOARD", removeBoard);
  yield takeEvery("MODIFY_BOARD", modifyBoard);
}

export default communitySaga;
