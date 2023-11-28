/**
 * react-redux connect 함수를 사용해서 "container"를 만듬
 */

import { connect } from "react-redux";
// import {
//   addTodoActionCreator,
//   removeTodoActionCreator,
//   removeAllActionCreator,
// } from "../actions";

/** ducks 패턴일때 import 하기 */
// import {
//   addTodoActionCreator,
//   removeTodoActionCreator,
//   removeAllActionCreator,
// } from "../ducks/todoDuck";

/** redux-actions 사용할때 import 하기 */
// import {
//   addTodo as addTodoActionCreator,
//   removeTodo as removeTodoActionCreator,
//   removeAll as removeAllActionCreator,
// } from "../actions/todoActions";

/** todoSlice로부터 action creator import 하기 */
import {
  addTodo as addTodoActionCreator,
  removeTodo as removeTodoActionCreator,
  removeAll as removeAllActionCreator,
} from "../slices/todoSlice";

import addTodoThunkActionCreator from "../thunks/addTodoThunk";
import { fetchTodosRequested as fetchTodosRequestedActionCreator } from "../actions/fetchTodoAction";

import TodoApp from "../../components/TodoApp";

/**
 * root reducer에서 toDo key로 접근하여
 * roDo 목록을 가져와서 객체 형태로 리턴
 */
function mapStateToProps(state, ownProps) {
  return {
    todoItems: [...state.todo, ...state.fetchTodos.data],
  };
}

/**
 * action을 각 creator로부터 만들어서 dispatch
 * @param {*} dispatch
 * @param {*} ownProps
 * @returns Object
 */
function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: (text) => {
      dispatch(addTodoActionCreator(text));
      // dispatch(addTodoThunkActionCreator(text)); // addToDo 함수 호출되면 Thunk 미들웨어에서 처리
    },
    removeTodo: () => {
      dispatch(removeTodoActionCreator());
    },
    removeAllTodo: () => {
      dispatch(removeAllActionCreator());
    },
    // 비동기 요청 테스트를 위한 함수 추가 - async middleware에서 처리 될 함수
    triggerAsyncFunction: (asyncFunction) => {
      dispatch(asyncFunction);
    },
    // 비동기 함수를 시작하는 fetchTodosRequestedActionCreator 함수를 dispatch하는 함수
    fetchTodo: () => {
      dispatch(fetchTodosRequestedActionCreator());
    },
  };
}

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoAppContainer;
