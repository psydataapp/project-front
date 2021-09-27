import { takeEvery, call, put, select } from "redux-saga/effects";
import api from "../../api/community";

function* addBoard(action) {
  console.log("--sagas-");
  try {
    const result = yield call(api.add, action.payload);
    console.log(result);
    const { size } = yield select((state) => state.community);
    const resultFetched = yield call(api.fetch, 0, size);
    // console.log(resultFetched);
    yield put({ type: "FETCH_BOARD_SUCCEEDED", payload: resultFetched.data });
  } catch (e) {
    alert(e.message);
  }
}

function* fetchBoard(action) {
  try {
    const { page, size } = yield select((state) => state.community);
    const result = yield call(
      api.fetch,
      action.payload ? action.payload.page : page,
      action.payload ? action.payload.size : size
    );
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
    const { page, size } = yield select((state) => state.community);
    const resultFetched = yield call(api.fetch, page, size);
    // console.log(resultFetched);
    yield put({ type: "FETCH_BOARD_SUCCEEDED", payload: resultFetched.data });
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
