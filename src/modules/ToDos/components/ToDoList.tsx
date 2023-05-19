import React from 'react'
import './ToDoList.css'
import { ToDoListType } from '../types/types'
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function ToDoList(props: ToDoListType) {
    const { children } = props
  return (
    <ul className='scroll-list' style={{
      position: 'absolute', 
      overflow: 'auto', 
      width: '90%', 
      height: '80%', 
      listStyle: 'none'
    }}>
      {children}
    </ul>
  )
}

export default ToDoList