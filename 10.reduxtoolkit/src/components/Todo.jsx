import { useSelector } from "react-redux";

import { TodoItem } from "../components";

function Todo() {
  const todos = useSelector((store) => store.todos);

  return (
    <div>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
