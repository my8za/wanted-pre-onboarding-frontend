import React, { useState } from 'react'
// library
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// api url
import { API_URL } from '../utils/constants/Config';

const SignUp = () => {
  const navigate = useNavigate();
  const [ form, setForm ] = useState({
    email: '',
    password: ''
  });
  const [ authenticate, setAuthenticate ] = useState(true);
  
  const handleClickSignUp = async() => {
    await axios.post(`${API_URL}auth/signup`, 
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
        navigate('/signin')
      }
    })
    .catch()
  } 

  return (
    <div>
      <h2>회원가입</h2>
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
            data-testid="password-input"
            type='password'
            onChange={(e)=>{setForm({...form, password: e.target.value})}}
          />
        </div>
      </form>
      <button data-testid="signup-button" onClick={handleClickSignUp} >회원가입</button>
    </div>
  )
}

export default SignUp;