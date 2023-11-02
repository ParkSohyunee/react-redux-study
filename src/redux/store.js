/** redux를 생성하고 export하는 코드 */

import { createStore } from "redux";
import rootReducer from "./reducers";

/**
 * createStore는 이제 더이상 사용하지 않는 방식
 * redux-toolkit을 사용하는 것이 표준
 * 하지만 기본 방식을 이해하고 배우기 위해 실습해봄
 */
const store = createStore(rootReducer);

export default store;
