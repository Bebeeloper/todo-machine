import React from 'react'
import { ToDoListType } from '../types/types'

function ToDoList(props: ToDoListType) {
    const { children } = props
  return (
    <ul style={{position: 'absolute', overflow: 'auto', width: '90%', height: '80%'}}>
      {children}
    </ul>
  )
}

export default ToDoList