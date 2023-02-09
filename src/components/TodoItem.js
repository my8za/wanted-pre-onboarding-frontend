import React, { useState } from 'react'
import EditMode from './EditMode';
// style sheet
import '../style/todo.scss';

const TodoItem = ({ item, idx, selectEditBtn, deleteTodo, updateTodo, onEdit, setOnEdit }) => {
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
      {onEdit[idx] === false ? (
      <div className='todo-content'>
        <span>{item.todo}</span>
        <div className='btns'>
          <button className='btn' data-testid="modify-button" onClick={() => {selectEditBtn(idx)}}>수정</button>
          <button className='btn' data-testid="delete-button" onClick={() => {deleteTodo(item.id)}}>삭제</button>
        </div>
      </div>
      ) : (
        <EditMode item={item} idx={idx} updateTodo={updateTodo} onEdit={onEdit} setOnEdit={setOnEdit} />
      )}
    </li>
  )
}

export default TodoItem;
