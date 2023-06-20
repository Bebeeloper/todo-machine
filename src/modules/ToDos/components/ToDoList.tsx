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
      boxShadow: 'rgba(0, 0, 0, 0.09) 0px 0px 10px 2px inset',
      borderRadius: '10px'
    }}>
      {children}
    </Box>
  )
}

export default ToDoList