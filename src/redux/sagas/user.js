import { takeEvery, call, put } from "redux-saga/effects";
import api from "../../api/user";

function* signUp(action) {
  try {
    const result = yield call(api.signUp, action.payload);
    console.log(result.data);
    yield put({
      type: "SIGN_UP_SUCCEEDED",
      payload: { ...action.payload },
    });
  } catch (e) {
    alert(e.message);
  }
}

export function* logIn(action) {
  try {
    const result = yield call(api.login, action.payload);
    console.log(result);
    if (result.data === null) {
      alert("가입되지 않은 아이디입니다.");
    } else if (action.payload.password !== result.data.password) {
      alert("비밀번호를 확인해주세요.");
    } else {
      yield put({
        type: "LOGIN_USER_SUCCESS",
        payload: { userID: result.data.userId, nickname: result.data.nickname },
      });
      localStorage.setItem("nickname", result.data.nickname);
      document.location.href = "/";
    }
  } catch (e) {
    alert(e.message);
  }
}

export function* logOut() {
  try {
    yield put({ type: "LOGOUT_USER_SUCCESS" });
    localStorage.removeItem("nickname");
    document.location.href = "/";
  } catch (e) {
    alert(e.message);
  }
}
function* userSaga() {
  yield takeEvery("SIGN_UP", signUp);
  yield takeEvery("LOG_IN", logIn);
  yield takeEvery("LOG_OUT", logOut);
}

export default userSaga;
