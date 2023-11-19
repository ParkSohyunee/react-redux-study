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
import {
  addTodo as addTodoActionCreator,
  removeTodo as removeTodoActionCreator,
  removeAll as removeAllActionCreator,
} from "../actions/todoActions";

import TodoApp from "../../components/TodoApp";

/**
 * root reducer에서 toDo key로 접근하여
 * roDo 목록을 가져와서 객체 형태로 리턴
 */
function mapStateToProps(state, ownProps) {
  return {
    todoItems: state.todo,
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
    },
    removeTodo: () => {
      dispatch(removeTodoActionCreator());
    },
    removeAllTodo: () => {
      dispatch(removeAllActionCreator());
    },
  };
}

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoAppContainer;
