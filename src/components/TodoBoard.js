import React from 'react'
import TodoItem from './TodoItem'

const TodoBoard = ({ todoList, deleteTodo, selectTodoItem, selectedItem, updateTodo, onEdit, setOnEdit }) => {
  return (
      <ul className='todo-board'>
        {todoList.map((item, idx) => (
          <TodoItem key={idx} item={item} selectTodoItem={selectTodoItem} deleteTodo={deleteTodo} selectedItem={selectedItem} updateTodo={updateTodo} onEdit={onEdit} setOnEdit={setOnEdit}/>
        ))}
      </ul>
    )
  }

export default TodoBoard;
