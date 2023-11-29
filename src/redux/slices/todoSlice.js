import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    /**
     * ⭐️state를 업데이트 하는 방식이 다름
     * redux-toolkit은 내부적으로 ⭐️immer를 사용하므로
     * 항상 새로운 state를 만들어서 return할 필요없이,
     * draft state를 자유롭게 수정하면 됨!!
     */
    addTodo: (state, action) => {
      // console.log(state); // Proxy(Array) {0: {…}} => Proxy 객체가 출력됨!!
      console.log(current(state)); // []
      state.push(action.payload); // return 기존배열에 push
      console.log(current(state)); // ['todo']
    },
    removeTodo: (state, action) => {
      console.log(current(state));
      return state.slice(0, -1); // return 기존배열을 slice
    },
    removeAll: (state, action) => {
      console.log(current(state)); // 삭제 직전 값이 출력
      return initialState; // 빈 배열을 return하면서 reset
    },
  },
});

export const { addTodo, removeTodo, removeAll } = todoSlice.actions;

export default todoSlice.reducer;
