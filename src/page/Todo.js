import React, { useState, useEffect } from 'react'
// library
import axios from 'axios';
// api_url
import { API_URL } from '../utils/constants/Config';
// components
import EditMode from '../components/EditMode';
import TodoBoard from '../components/TodoBoard';
import TodoInput from '../components/TodoInput'

const Todo = () => {
  
  // getTodos 
  const getTodos = async() => {
    await axios.get(`${API_URL}todos`, 
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('jwt-token')}`,
        }, 
    })
    .then(resp => {
      setTodoList(resp.data)
    })
  }

  // getTodos 호출  --> todoList변동일어나면 랜더시켜야할것은데,,ㅠㅠㅠ
  useEffect(() => {
    getTodos();
  }, [])


  const [ inputValue, setInputValue ] = useState('')

  const [ todoList, setTodoList ] = useState([]);

  // edit 버튼 클릭시, 클릭한 아이템 정보 관리
  const [ selectedItem, setSelectedItem ] = useState({});

  // todo-input-value
  const getInputValue = (e) => {
    setInputValue(e.target.value);
  }

  // createTodo
  const createTodo = async() => {
    await axios.post(`${API_URL}todos`, 
      {
        todo: inputValue,
      }, 
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('jwt-token')}`,
          "Content-Type" : `application/json`,
        }, 
    })
    .then(resp => {
      const newTodo = resp.data
      setTodoList([...todoList, newTodo])
    })
  }

  // deleteTodo
  const deleteTodo = async(id) => {
    await axios.delete(`${API_URL}todos/${id}`, 
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('jwt-token')}`,
        }, 
    })
    .then(
      //랜더를 어떻게 일으키지
    )
  }

   // edit-button-handler
  const selectTodoItem = (item) => {  
    setSelectedItem(item)
  }

  // updateTodo
  const updateTodo = async (id, isCompleted, editValue) => {
    await axios.put(`${API_URL}todos/${id}`, 
      {
        todo: editValue,
        isCompleted: isCompleted
      },
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('jwt-token')}`,
          "Content-Type": `application/json`
        }, 
    })
    .then(
      //랜더를 어떻게 일으키지22
    )
  }


  return (
    <div>
      <h2>Todo List</h2>
      <TodoInput getInputValue={getInputValue} createTodo={createTodo}/>
      <TodoBoard todoList={todoList} selectTodoItem={selectTodoItem} deleteTodo={deleteTodo}/>
      <EditMode selectedItem={selectedItem} updateTodo={updateTodo}/>
    </div>
  )
}

export default Todo
