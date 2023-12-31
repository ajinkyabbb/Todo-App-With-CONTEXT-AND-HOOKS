import React from 'react';
import { AppBar, Grid, Paper, Toolbar, Typography } from '@material-ui/core';
import TodoProvider from './context/todos.context';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp(){
  return(
    <Paper 
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor:"#fafafa" 
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{height:"64px"}}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS AND CONTEXT</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent='center' style={{marginTop:"1rem"}}>
      <Grid item xs={11} md={8} lg={4}>
        <TodoProvider>
          <TodoForm />
          <TodoList />
        </TodoProvider>
      </Grid>
      </Grid> 
    </Paper>
  )
}


export default TodoApp;