import React from 'react'
import './ToDoList.css'
import { ToDoListType } from '../types/types'
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function ToDoList(props: ToDoListType) {
    const { children } = props
  return (
    <Box className='scroll-list' style={{
      position: 'absolute', 
      overflow: 'auto', 
      width: '100%', 
      height: '95%',
    }}>
      {children}
    </Box>
  )
}

export default ToDoList