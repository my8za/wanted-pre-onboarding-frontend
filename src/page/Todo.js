import React, { useState, useEffect } from 'react'
// library
import axios from 'axios';
// api_url
import { API_URL } from '../utils/constants/Config';
// components
import TodoBoard from '../components/TodoBoard';
import TodoInput from '../components/TodoInput'
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  const navigate = useNavigate()
  const [ inputValue, setInputValue ] = useState('')
  const [ todoList, setTodoList ] = useState([]);
  const [ selectedItem, setSelectedItem ] = useState({});
  const [ onEdit, setOnEdit ] = useState(false);

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

  // getTodos 호출
  useEffect(() => {
    getTodos();
  }, [])

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
    .then((resp) => {
      if (resp.status === 204) { 
        getTodos(); 
      }
    })
    .catch((err) => { 
      console.log(err);
    });
  }

   // edit-button-handler
  const selectTodoItem = (item) => {  
    setSelectedItem(item)
    todoList.map(i => (
      item.id === i.id ? setOnEdit(true) : <></>
      // item.id === i.id ? setOnEdit(true) : setOnEdit(false)는 왜 안됨?
    ))
  }

  // updateTodo
  const updateTodo = async (id, isCompleted, editValue) => {
    console.log(isCompleted)
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
    .then((resp) => {
      if (resp.status === 200) { 
        console.log('성공')
        getTodos(); 
      }
    })
    .catch((err) => { 
      console.log(err);
    });
  }

  return (
    <div className='todo'>
      <button onClick={()=>{localStorage.clear(); navigate('/signin')}}> 로그아웃</button>
      <h2 className='todo-title'>Todo List</h2>
      <div className='todo-box'>
        <TodoInput getInputValue={getInputValue} createTodo={createTodo}/>
        <TodoBoard todoList={todoList} deleteTodo={deleteTodo} selectTodoItem={selectTodoItem} selectedItem={selectedItem} updateTodo={updateTodo} onEdit={onEdit} setOnEdit={setOnEdit}/>
      </div>
    </div>
  )
}

export default Todo;
