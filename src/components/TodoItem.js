import React, { useState } from 'react'

const TodoItem = ({ item, selectTaskItem, deleteTaskItem }) => {
  const [ editMode, setEditMode ] = useState(false);

  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{item.content}</span>
      </label>
      <button data-testid="modify-button" onClick={()=>{selectTaskItem(item)}}>수정</button>
      <button data-testid="delete-button" onClick={()=>{deleteTaskItem(item.id)}}>삭제</button>
    </li>
  )
}

export default TodoItem
