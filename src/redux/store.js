/** redux를 생성하고 export하는 코드 */

import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
// import asyncFunctionMiddleware from "./middlewares/asyncFunctionMiddleware";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { persistStore, persistReducer, createMigrate } from "redux-persist";
import storage from "redux-persist/lib/storage"; // 로컬스토리지
import sessionStorage from "redux-persist/es/storage/session"; // 세션스토리지

/**
 * migrate
 * 이미 사용자에게 배포된 이후, state 변화가 생겼을 때,
 * 기존 사용자에게 저장된 데이터를 현재 state에 맞게 변경해주는 기능
 * (주의)개발자가 실수할 수 있으므로, 꼭 저장이 필요한 데이터만 whitlist에 넣어서 사용하는 것이 좋음!!
 */
const migrations = {
  1: (state) => {
    return {
      ...state,
      fetchTodos: {
        ...state.fetchTodos,
        extraData: undefined,
      },
    };
  },
  2: (state) => {
    return {
      ...state,
      fetchTodos: {
        ...state.fetchTodos,
        extraData: null,
      },
    };
  },
};

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  version: 2,
  migrate: createMigrate(migrations, { debug: false }),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * async 함수와 middleware를 연동
 */
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

/**
 * saga 미들웨어 연동
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * createStore는 이제 더이상 사용하지 않는 방식
 * redux-toolkit을 사용하는 것이 표준
 * 하지만 기본 방식을 이해하고 배우기 위해 실습해봄
 */
const store = createStore(
  // rootReducer,
  persistedReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, sagaMiddleware)) // redux store에 thunk 미들웨어, saga 미들웨어 연동

  // composeEnhancers(applyMiddleware(asyncFunctionMiddleware))
  /**
   * 리덕스 dev_tools는 리덕스 스토어의 미들웨어로 연동해야 함
   * Diff 에서 Chart로 리덕스 State 변화와 트리구조를 확인할 수 있음!!
   */
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(rootSaga); // 꼭 호출해주기!!!!!

export const persistor = persistStore(store);
export default store;
