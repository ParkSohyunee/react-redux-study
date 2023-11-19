/** root reducer가 들어가는 파일 */

import { combineReducers } from "redux";
// import toDoReducer from "./todoReducer";
// import todoReducer from "../ducks/todoDuck"; // duck 파일로 import 하기
import todoReducer from "../actions/todoActions"; // redux-actions 적용할때 import 하기

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
