import { createReduxModule } from "hooks-for-redux";

const initialState = {
  todos: [],
};

export const [useTodos, { addTodo, deleteTodo, handleTodo }] =
  createReduxModule("todoList", initialState, {
    addTodo: (state, todo) => {
      return {
        ...state,
        todos: [...state.todos, todo],
      };
    },
    deleteTodo: (state, id) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      };
    },
    handleTodo: (state, id) => {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    },
  });
