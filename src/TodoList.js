import { Divider, List, Paper } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { TodoContext } from "./context/todos.context";
import Todo from "./Todo";

function TodoList() {
  const { todos } = useContext(TodoContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <React.Fragment key={i}>
              <Todo {...todo} key={todo.id} />
              {i < todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
