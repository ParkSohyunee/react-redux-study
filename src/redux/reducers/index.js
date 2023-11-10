/** root reducer가 들어가는 파일 */

import { combineReducers } from "redux";
// import toDoReducer from "./todoReducer";
import todoReducer from "../ducks/todoDuck";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
