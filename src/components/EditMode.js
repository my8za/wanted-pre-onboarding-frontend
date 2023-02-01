import React, { useState } from 'react'

const EditMode = ({ selectedItem, editTaskItem }) => {
  const [ editValue, setEditValue ] = useState('');
  
  const onSubmit = (e) => {
    e.preventDefault();
    // 에러발생...ㅠㅠ
    editTaskItem(selectedItem.id, editValue)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Edit</h2>
        <input 
          data-testid="modify-input"
          defaultValue={selectedItem && selectedItem.content}
          onChange={(e) => {setEditValue(e.target.value)}}
        />
        <button type='submit' data-testid="submit-button">제출</button>
        <button data-testid="cancel-button">취소</button>
      </form>
    </div>
  )
}

export default EditMode
