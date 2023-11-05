/**
 * 리덕스의 action과 action creator type을 모와둔 곳
 * Todo 관련 action type
 * action creator -> action 객체를 만들어주는 단순한 자바스크립트 함수
 */

export const ACTION_TYPE_ADD_TODO = "ADD_TODO";
export const ACTION_TYPE_REMOVE_TODO = "REMOVE_TODO";
export const ACTION_TYPE_REMOVE_ALL = "REMOVE_ALL";

export function addTodoActionCreator(text) {
  return {
    type: ACTION_TYPE_ADD_TODO,
    text: text,
  };
}

export function removeTodoActionCreator() {
  return {
    type: ACTION_TYPE_REMOVE_TODO,
  };
}

export function removeAllActionCreator() {
  return {
    type: ACTION_TYPE_REMOVE_ALL,
  };
}
