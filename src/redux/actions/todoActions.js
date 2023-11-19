import { createActions, handleActions } from "redux-actions";

const initialState = [];

// createAction(s) - action creator 함수를 생성해주는 함수 (action 객체를 생성 x)
export const { addTodo, removeTodo, removeAll } = createActions({
  ADD_TODO: (text) => {
    // payload를 넣어서 action에 함께 보낼 데이터를 넣어줌
    return { text };
  },
  REMOVE_TODO: () => {
    return {};
  },
  REMOVE_ALL: () => {
    return {};
  },
});

// handleAction(s) - 각 action에 대한 reducer 함수를 만들어주는 함수
// key는 action creator, value는 reducer 함수
const reducer = handleActions(
  {
    [addTodo]: (state, action) => {
      return state.concat(action.payload.text);
    },
    [removeTodo]: (state, action) => {
      return state.slice(0, -1);
    },
    [removeAll]: (state, action) => {
      return [];
    },
  },
  initialState
);

export default reducer;
