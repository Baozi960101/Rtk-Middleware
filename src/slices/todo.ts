import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  todoList: Array<string>;
};

const initialState: InitialState = {
  todoList: [],
};

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    addTimestamp: (state) => {
      state.todoList.push(Date.now().toString());
    },
  },
});

export const { addTodo, addTimestamp } = toDoSlice.actions;

export default toDoSlice.reducer
