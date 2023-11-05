import "./App.css";
import TodoAppContainer from "./redux/containers/TodoAppContainer";

/**
 * import TodoApp from "./components/TodoApp";
 * 위처럼 redux 컨테이너가 아닌 react 컴포넌트를 사용하면서 props를 통해 state, dispatch를 통해 접근하려고 하면 에러
 */

function App() {
  return (
    <div className="App">
      <TodoAppContainer />
    </div>
  );
}

export default App;
