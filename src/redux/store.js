/** redux를 생성하고 export하는 코드 */

import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
// import asyncFunctionMiddleware from "./middlewares/asyncFunctionMiddleware";
import thunkMiddleware from "redux-thunk";

/**
 * async 함수와 middleware를 연동
 */
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

/**
 * createStore는 이제 더이상 사용하지 않는 방식
 * redux-toolkit을 사용하는 것이 표준
 * 하지만 기본 방식을 이해하고 배우기 위해 실습해봄
 */
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)) // redux store에 thunk 미들웨어 연동

  // composeEnhancers(applyMiddleware(asyncFunctionMiddleware))
  /**
   * 리덕스 dev_tools는 리덕스 스토어의 미들웨어로 연동해야 함
   * Diff 에서 Chart로 리덕스 State 변화와 트리구조를 확인할 수 있음!!
   */
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
