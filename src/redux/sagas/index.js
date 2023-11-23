// root saga
// saga가 많아지면 지금처럼 root saga를 만들어서 redux store에 연결해줘야 함!!

import { all } from "redux-saga/effects";
import fetchTodosSaga from "./fetchTodosSaga";

function* rootSaga() {
  yield all([fetchTodosSaga()]);
}

export default rootSaga;
