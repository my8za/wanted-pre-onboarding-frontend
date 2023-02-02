import React from 'react'

const TodoInput = ({ getInputValue, createTodo }) => {
  return (
    <div>
      <input data-testid="new-todo-input" onChange={getInputValue} onFocus={(e)=>{e.target.value=''}}/>
      <button data-testid="new-todo-add-button" onClick={createTodo}>추가</button>
    </div>
  )
}

export default TodoInput;
