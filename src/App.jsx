import "./App.css";
import { addTodo, handleTodo, deleteTodo } from "./TodoRedux";
import { useState } from "react";
import { useTodos } from "./TodoRedux";

function App() {
  const { todos } = useTodos("");
  const [todo, setTodo] = useState("");

  function handleSub(e) {
    e.preventDefault();
    const todoList = {
      text: todo,
      completed: false,
      id: new Date().getTime(),
    };

    addTodo(todoList);
  }

  return (
    <div className="flex  justify-center items-center p-6 mt-16 flex-col">
      <form onSubmit={handleSub}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add your todo"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-2
          "
        >
          Add
        </button>
      </form>
      {todos.map((todo, index) => {
        return (
          <div
            key={todo.id}
            className="text-xl font-semibold font-serif space-x-3 space-y-2"
          >
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>

            <input type="checkbox" onClick={() => handleTodo(todo.id)} />
            <button
              onClick={() => deleteTodo(todo.id)}
              className="inline-block rounded bg-red-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-danger-800 "
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
