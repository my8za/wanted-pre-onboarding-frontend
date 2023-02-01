import React, { useState } from 'react'
// library
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// api url
import { API_URL } from '../utils/constants/Config';

const SignIn = () => {
  const navigate = useNavigate();
  const [ form, setForm ] = useState({
    email: '',
    password: ''
  });

  const handleClickSignIn = async() => {
    await axios.post(`${API_URL}auth/signin`, 
      {
        email: form.email,
        password: form.password
      }, 
      {
        headers: {
          "Content-Type" : `application/json`,
        }, 
    })
    .then(resp => {
      if (resp.data.access_token) {
        console.log(resp.data)
        localStorage.setItem('jwt-token', resp.data.access_token);
        navigate('/todo')
      }
    })
    .catch()
  } 
  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={(e) => {e.preventDefault();}}>
        <div>
          <label>email</label>
          <input
            data-testid="email-input"
            onChange={(e)=>{setForm({...form, email: e.target.value})}}
          />
        </div>
        <div>
          <label>password</label>
          <input
            data-testid="signin-button"
            type='password'
            onChange={(e)=>{setForm({...form, password: e.target.value})}}
          />
        </div>
      </form>
      <button data-testid="signup-button" onClick={handleClickSignIn}>로그인</button>
    </div>
  )
}

export default SignIn;
