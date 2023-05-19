import React from 'react'
import { ToDoListType } from '../types/types'

function ToDoList(props: ToDoListType) {
    const { children } = props
  return (
    <ul>
      {children}
    </ul>
  )
}

export default ToDoList