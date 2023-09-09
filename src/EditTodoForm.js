import React from 'react';
import useInputState from './hooks/useInputState';
import { TodoContext } from './context/todos.context';
import { useContext } from 'react';
import { TextField } from '@material-ui/core';

function EditTodoForm({id, task, toggleEditForm}){
  const {editTodo} = useContext(TodoContext)
  const [value, handleChange, reset] = useInputState(task);
  console.log("EDIT FORM RENDERED")
  return(
    <form 
      onSubmit={e=>{
        e.preventDefault();
        editTodo(id,value);
        reset();
        toggleEditForm()
      }}
      style={{ marginLeft:"1rem", width:"50%" }}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}


export default EditTodoForm;