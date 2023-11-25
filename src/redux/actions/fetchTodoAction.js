import { createActions, handleActions } from "redux-actions";

const initialState = {
  pending: false,
  data: [],
  error: null,
};

export const { fetchTodosRequested, fetchTodosSucceeded, fetchTodoFailed } =
  createActions({
    FETCH_TODOS_REQUESTED: () => ({}),
    FETCH_TODOS_SUCCEEDED: (data) => ({ data }),
    FETCH_TODOS_FAILED: (error) => ({ error }),
  });

const reducer = handleActions(
  {
    // 비동기 요청 시작
    [fetchTodosRequested]: (state, action) => {
      return {
        ...state,
        pending: true,
        // data: [],
        error: null,
      };
    },
    // 비동기 요청 성공
    [fetchTodosSucceeded]: (state, action) => {
      return {
        ...state,
        pending: false,
        // data: action.payload.data,
        data: state.data.concat(action.payload.data), // 비동기로 받은 할 일 데이터 누적
      };
    },
    // 비동기 요청 실패
    [fetchTodoFailed]: (state, action) => {
      return {
        ...state,
        pending: false,
        data: action.payload.error,
      };
    },
  },
  initialState
);

export default reducer;
