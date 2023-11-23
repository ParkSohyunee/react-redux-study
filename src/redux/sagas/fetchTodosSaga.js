import { put, delay, takeEvery } from "redux-saga/effects"; // redux-saga effects creator
import {
  fetchTodoFailed,
  fetchTodosRequested,
  fetchTodosSucceeded,
} from "../actions/fetchTodoAction";

// Generator function
function* fetchTodos() {
  try {
    // 실제로는 서버 API를 호출해서 데이터를 받아와야 함!!
    const data = yield delay(3000, [
      "서버로부터 받아온 할 일 1",
      "서버로부터 받아온 할 일 2",
      "서버로부터 받아온 할 일 3",
    ]);
    yield put(fetchTodosSucceeded(data)); // data가 redux store로 전달
  } catch (error) {
    yield put(fetchTodoFailed(error)); // error가 redux store로 전달
  }
}

/**
 * fetchTodosSaga Generator Function
 *
 * takeEvery effect creator를 사용하여
 * fetchTodosRequested action이 dispatch될 때마다
 * fetchTodos Generator function을 실행
 */
function* fetchTodosSaga() {
  yield takeEvery(fetchTodosRequested, fetchTodos);
}

export default fetchTodosSaga;
