/**
 * todo와 관련된 action을 처리하기 위한 Reducer
 */

import {
  ACTION_TYPE_ADD_TODO,
  ACTION_TYPE_REMOVE_TODO,
  ACTION_TYPE_REMOVE_ALL,
} from "../actions";

const todoInitialState = [];

export default function toDoReducer(state = todoInitialState, action) {
  switch (action.type) {
    case ACTION_TYPE_ADD_TODO:
      return state.concat(action.text);
    case ACTION_TYPE_REMOVE_TODO:
      return state.slice(0, -1);
    case ACTION_TYPE_REMOVE_ALL:
      return [];
    default:
      return state;
  }
}
