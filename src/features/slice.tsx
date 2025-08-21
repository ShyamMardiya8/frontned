import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  name: string;
  age: string;
}

type TodoState = Todo[];

const initialState: TodoState = [];

const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    addTodo: (state) => {
      state.push({
        id: Date.now(),
        name: "shyam",
        age: "19",
      });
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = slice.actions;
export default slice.reducer;
