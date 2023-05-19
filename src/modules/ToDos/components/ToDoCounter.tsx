import React from 'react'
import { ToDoCounterType } from '../types/types';
import Typography from '@mui/material/Typography';

function ToDoCounter(props: ToDoCounterType) {
    const { completed, total } = props;
  return (
    <>
        <Typography variant="h6" align="center">
            Has completado {completed} de {total} tareas...
        </Typography>
    </>
    // <h1> Has completado {completed} de {total}</h1>
  )
}

export default ToDoCounter