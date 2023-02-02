import React from 'react'
import TodoItem from './TodoItem'

const TodoBoard = ({ todoList, deleteTodo, selectTodoItem }) => {
  return (
      <ul>
        {todoList.map((item, idx) => (
          <TodoItem key={idx} item={item} selectTodoItem={selectTodoItem} deleteTodo={deleteTodo}/>
        ))}
      </ul>
    )
  }

export default TodoBoard;
