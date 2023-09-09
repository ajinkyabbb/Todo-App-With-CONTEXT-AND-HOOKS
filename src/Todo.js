import React,{useState} from "react";
import useToggleState from './hooks/useToggleState'
import { TodoContext } from "./context/todos.context";
import { useContext } from "react";
import { ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import EditTodoForm from "./EditTodoForm";
import  {Checkbox,IconButton}  from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

function Todo({id, task, completed}){
 const {removeTodo, toggleTodo} = useContext(TodoContext);
 const [isEditing, toggle] = useToggleState(false);

  return(
    <ListItem style={{height:'64px'}}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
      ):(
        <>
          <Checkbox 
            tabIndex={-1}
            checked={completed}
            onClick={()=> toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-Through" : "none"}}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={()=> removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )
    }
    </ListItem>
  )
}


export default Todo;