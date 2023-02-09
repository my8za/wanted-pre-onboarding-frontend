import React from 'react'
import TodoItem from './TodoItem'

const TodoBoard = ({ todoList, deleteTodo, selectEditBtn, updateTodo, onEdit, setOnEdit }) => {
  return (
      <ul className='todo-board'>
        {todoList.map((item, idx) => (
          <TodoItem key={idx} item={item} idx={idx} selectEditBtn={selectEditBtn} deleteTodo={deleteTodo} updateTodo={updateTodo} onEdit={onEdit} setOnEdit={setOnEdit}/>
        ))}
      </ul>
    )
  }

export default TodoBoard;
