/** root reducer가 들어가는 파일 */

import { combineReducers } from "redux";
import toDoReducer from "./todoReducer";

const rootReducer = combineReducers({
  todo: toDoReducer,
});

export default rootReducer;
