import React from 'react'

const TodoItem = ({ item, selectTodoItem, deleteTodo }) => {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{item.todo}</span>
      </label>
      <button data-testid="modify-button" onClick={() => {selectTodoItem(item)}}>수정</button>
      <button data-testid="delete-button" onClick={() => {deleteTodo(item.id)}}>삭제</button>
    </li>
  )
}

export default TodoItem;
