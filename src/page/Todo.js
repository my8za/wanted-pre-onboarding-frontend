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
  const [ onEdit, setOnEdit ] = useState([]);

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
  if(onEdit.length <= todoList.length) {
      todoList.map(todo => (
        onEdit.push(false)
      ))
    }
  console.log(onEdit)

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

   // 수정버튼 클릭 
  const selectEditBtn = (idx) => {  
    setOnEdit(
      onEdit.map((item, index) => 
        index === idx ? true : onEdit[idx]
      )
    )
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
    .then((resp) => {
      if (resp.status === 200) { 
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
        <TodoBoard todoList={todoList} deleteTodo={deleteTodo} selectEditBtn={selectEditBtn} updateTodo={updateTodo} onEdit={onEdit} setOnEdit={setOnEdit}/>
      </div>
    </div>
  )
}

export default Todo;
