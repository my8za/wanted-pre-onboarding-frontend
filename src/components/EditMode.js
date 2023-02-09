import React, { useState, useEffect } from 'react'

const EditMode = ({ item, idx, updateTodo, onEdit, setOnEdit }) => {
  const [ editValue, setEditValue ] = useState('');
  useEffect(()=>{
    if(item && item.todo) {
      return setEditValue(item.todo)
    }
  }, [item])
  const onSubmit = () => {
    const { id, isCompleted } = item;
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
          <button 
            className='btn' 
            data-testid="submit-button"  
            onClick={onSubmit}
          >제출</button>
          <button 
            className='btn' 
            data-testid="cancel-button"
            onClick={()=>{setOnEdit(
              onEdit.map((item, index) => (
                index === idx ? false : false
              ))
            )}}
            >취소</button>
        </div>
      </form>
    </div>
  )
}

export default EditMode;
