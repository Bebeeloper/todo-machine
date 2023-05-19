import React from 'react'
import { ToDoItemType } from '../types/types'

function ToDoItem(props: ToDoItemType) {
    const { text } = props
  return (
    <li>
        <span>V</span>
        <p>{text}</p>
        <span>X</span>
    </li>
  )
}

export default ToDoItem