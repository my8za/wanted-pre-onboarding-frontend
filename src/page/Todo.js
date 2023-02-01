import React, { useState } from 'react'
import EditMode from '../components/EditMode';
import TodoBoard from '../components/TodoBoard';
import TodoInput from '../components/TodoInput'

const Todo = () => {
  const [ inputValue, setInputValue ] = useState({
    id: '',
    content: '',
  })

  const [ todoList, setTodoList ] = useState([
    {id: 1, content: 'default task1'},
    {id: 2, content: 'default task2'},
  ]);

  // edit 버튼 클릭시, 클릭한 아이템 정보 관리
const [ selectedItem, setSelectedItem ] = useState(null);


  // 랜덤 아이디 생성
  const randomIdGenerate = () => {
    return '_' + Math.random().toString(36).substring(2, 9)
  }

  // todo-input-value
  const getInputValue = (e) => {
    setInputValue(e.target.value);
  }

  // task 추가 버튼 클릭
  const addTaskItem = () => {
    const newTodoList = {
      id: randomIdGenerate(),
      content: inputValue
    }
    setTodoList(todoList.concat(newTodoList));
  }

  // delete-task-item
  const deleteTaskItem  = (id) => {
    console.log(id)
    setTodoList(todoList.filter(item => item.id !== id));
  }

  // edit-button-handler
  const selectTaskItem = (item) => {  
    setSelectedItem(item);
  }

  // task 내용 수정
  const editTaskItem = (itemId, editValue) => {
    todoList.map(item => (
      itemId === item.id ? {...todoList, content: editValue} : todoList
    ))
  }


  return (
    <div>
      <h2>Todo List</h2>
      <TodoInput getInputValue={getInputValue} addTaskItem={addTaskItem} />
      <EditMode selectedItem={selectedItem} editTaskItem={editTaskItem}/>
      <TodoBoard todoList={todoList} selectTaskItem={selectTaskItem} deleteTaskItem={deleteTaskItem}/>
    </div>
  )
}

export default Todo
