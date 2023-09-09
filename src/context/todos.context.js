import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  { id: 1, task: "Mow the lawn using goats", completed: false },
  { id: 2, task: "Release lady bug into garden", completed: true },
];

export const TodoContext = createContext();

export default function TodoProvider(props) {
  const todoStuff = useTodoState(defaultTodos);
  return (
    // todos --> initialTodos --> defaultTodos, functions --> todo manipulation addTodo, removeTodo...
    <TodoContext.Provider value={todoStuff}>
      {props.children}
    </TodoContext.Provider>
  );
}
