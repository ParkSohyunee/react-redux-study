import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TodoApp from "./components/TodoApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Provider 컴포넌트보다 하위에 위치해야 함 */}
      <PersistGate loading={null} persistor={persistor}>
        {/* TodoApp 컴포넌트를 redux hook을 사용하도록 변경했기 때문에 가능, (참고 - connect방식은 과거 방식!) */}
        <TodoApp />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
