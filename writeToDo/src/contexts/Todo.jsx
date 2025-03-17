import React, { useContext, createContext } from "react";

export const todoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Message",
      completed: false,
    },
  ],

  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
  updateTodo: (id, todo) => {},
});

export const useTodo = () => {
  return useContext(todoContext);
};

export const TodoProvider = todoContext.Provider;
