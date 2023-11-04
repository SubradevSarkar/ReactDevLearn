/* eslint-disable react/prop-types */
import { useState } from "react";

import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { removeTodo, toggleComplete, updateTodo } = useTodo();

  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.name);

  const handleOnUpdate = () => {
    updateTodo(todo.id, { ...todo, name: todoMsg });
    setIsTodoEditable(!isTodoEditable);
  };

  return (
    <div className="flex shrink">
      <div
        className={`flex w-full bg-slate-50 rounded-l-md gap-x-3 shadow-sm shadow-white/50 duration-300  text-black px-3 py-1.5 ${
          todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />

        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg ${
            isTodoEditable ? " border-black/10 px-2" : " border-transparent"
          } ${todo.completed ? " line-through" : ""}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
      </div>
      <div className="flex">
        <div
          className={`flex px-2 ${
            isTodoEditable ? "bg-slate-600" : " bg-cyan-500"
          }`}
        >
          {!isTodoEditable ? (
            <button onClick={() => setIsTodoEditable(!isTodoEditable)}>
              🖊️
            </button>
          ) : (
            <button onClick={handleOnUpdate}>📂</button>
          )}
        </div>
        <button
          className="bg-red-600 px-3 rounded-e-md"
          onClick={() => removeTodo(todo.id)}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
