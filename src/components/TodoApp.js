import { useState } from "react";

export default function TodoApp({
  todoItems,
  addTodo,
  removeTodo,
  removeAll,
  triggerAsyncFunction,
}) {
  const [todo, setTodo] = useState("");

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    addTodo(todo);
    setTodo("");
  };

  return (
    <>
      <h3>오늘 할 일</h3>
      <ul>
        {todoItems.map((todoItem, index) => {
          return <li key={index}>{todoItem}</li>;
        })}
      </ul>
      <div>
        <input onChange={handleInput} value={todo} />
        <button onClick={handleAddTodo}>할 일 추가</button>
        <button onClick={removeTodo}>할 일 삭제</button>
        <button onClick={removeAll}>모두 삭제</button>
      </div>
      <button
        onClick={() => {
          triggerAsyncFunction((dispatch, getState) => {
            console.log("비동기 함수 실행", getState());

            new Promise((resolve, reject) => {
              setTimeout(resolve, 3000);
            })
              .then(() => {
                console.log("비동기 함수 성공", getState());
              })
              .finally(() => {
                console.log("비동기 함수 종료", getState());
              });
          });
        }}
      >
        비동기 함수 테스트
      </button>
    </>
  );
}
