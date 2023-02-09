import React, { useState, useEffect } from 'react'

const EditMode = ({ selectedItem, updateTodo, setOnEdit }) => {
  const [ editValue, setEditValue ] = useState('');
  useEffect(()=>{
    if(selectedItem.todo) {
      return setEditValue(selectedItem.todo)
    }
  }, [selectedItem])
  const onSubmit = () => {
    const { id, isCompleted } = selectedItem;
    updateTodo(id, isCompleted, editValue)
  }

  return (
    <div>
      <form className='edit-mode'>
        <input 
          data-testid="modify-input"
          defaultValue={editValue}
          onChange={(e) => {setEditValue(e.target.value)}}
        />
        <div className='btns'>
          <button className='btn' data-testid="submit-button"  onClick={onSubmit}>제출</button>
          <button className='btn' data-testid="cancel-button" onClick={()=>{setOnEdit(false)}}>취소</button>
        </div>
      </form>
    </div>
  )
}

export default EditMode;
