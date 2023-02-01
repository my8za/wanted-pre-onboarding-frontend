import React from 'react'
import TodoItem from './TodoItem'

const TodoBoard = ({ todoList, selectTaskItem, deleteTaskItem }) => {
  
  return (
    <ul>
      {todoList.map((item, idx) => (
        <TodoItem key={idx} id={item.id} item={item} selectTaskItem={selectTaskItem} deleteTaskItem={deleteTaskItem}/>
      ))}
    </ul>
  )
}

export default TodoBoard;
