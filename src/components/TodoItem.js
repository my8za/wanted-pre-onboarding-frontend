import React, { useState } from 'react'
import EditMode from './EditMode';
// style sheet
import '../style/todo.scss';

const TodoItem = ({ item, selectTodoItem, deleteTodo, selectedItem, updateTodo, onEdit, setOnEdit }) => {
  const [ completed, setCompleted ] = useState(item.isCompleted);
  const checkBoxStatus = (e) => {
    setCompleted(e.target.checked);
    const { id, todo } = item
    updateTodo(id, e.target.checked, todo);
  };
  return (
    <li className='todo-item'>
      <label>
        <input 
          type="checkbox" 
          checked={completed}
          onChange={(e)=>{checkBoxStatus(e)}}/>
      </label>
      {onEdit === false ? (
      <div className='todo-content'>
        <span>{item.todo}</span>
        <div className='btns'>
          <button className='btn' data-testid="modify-button" onClick={() => {selectTodoItem(item)}}>수정</button>
          <button className='btn' data-testid="delete-button" onClick={() => {deleteTodo(item.id)}}>삭제</button>
        </div>
      </div>
      ) : (
        <EditMode selectedItem={selectedItem} updateTodo={updateTodo} setOnEdit={setOnEdit} />
      )}
    </li>
  )
}

export default TodoItem;
