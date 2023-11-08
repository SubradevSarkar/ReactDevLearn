import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../features/todo/todoSlice.js";

export const store = configureStore({
  reducer: TodoReducer,
});
