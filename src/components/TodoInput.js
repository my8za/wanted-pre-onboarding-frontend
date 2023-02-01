import React from 'react'

const TodoInput = ({ getInputValue, addTaskItem }) => {


  return (
    <div>
      <input data-testid="new-todo-input" onChange={getInputValue} onFocus={(e)=>{e.target.value=''}}/>
      <button data-testid="new-todo-add-button" onClick={addTaskItem}>추가</button>
    </div>
  )
}

export default TodoInput;
