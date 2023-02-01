import React, { useState, useEffect } from 'react'

const EditMode = ({ selectedItem, updateTodo }) => {
  const [ editValue, setEditValue ] = useState('');

  useEffect(()=>{
    if(selectedItem.todo) {
      return setEditValue(selectedItem.todo)
    }
  }, [selectedItem])

  const onSubmit = (e) => {
    e.preventDefault();
    const { id, isCompleted } = selectedItem;
    updateTodo(id, isCompleted, editValue)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Edit</h2>
        <input 
          data-testid="modify-input"
          defaultValue={editValue}
          onChange={(e) => {setEditValue(e.target.value)}}
        />
        <button type='submit' data-testid="submit-button">제출</button>
        <button data-testid="cancel-button">취소</button>
      </form>
    </div>
  )
}

export default EditMode;
