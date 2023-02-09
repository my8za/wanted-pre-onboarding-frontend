import React, { useState } from 'react'
// library
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// api url
import { API_URL } from '../utils/constants/Config';
// style sheet
import '../style/signUp.scss';

const SignIn = () => {
  const navigate = useNavigate();
  const [ form, setForm ] = useState({
    email: '',
    password: ''
  });
  
  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const onChangeEmail = (e) => {
    const regExp = /@/;
    const currentValue = e.target.value;
    setForm({...form, email: currentValue})
    !regExp.test(currentValue) ? setIsEmail(false) : setIsEmail(true)
  }
  const onChangePassword = (e) => {
    const regExp = /^[A-Za-z0-9]{8,}$/;
    const currentValue = e.target.value;
    setForm({...form, password: currentValue})
    !regExp.test(currentValue) ? setIsPassword(false) : setIsPassword(true)
  }

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
    <div className='page'>
      <div className='sign-up'>
        <h2>Welcome back</h2>
        <form onSubmit={(e) => {e.preventDefault();}}>
          <div className='input-box'>
            <label>e-mail</label>
            <input
              data-testid="email-input"
              onChange={(e)=>{onChangeEmail(e)}}
            />
          </div>
          <div className='input-box'>
            <label>password</label>
            <input
              data-testid="signin-button"
              type='password'
              onChange={(e)=>{onChangePassword(e)}}
            />
          </div>
        </form>
        <button 
          className='btn' 
          data-testid="signup-button" 
          onClick={handleClickSignIn}
          disabled={!(isEmail && isPassword)}
        >
          로그인
        </button>
      </div>
      <div className='text-content'>
        <h3>New here?</h3>
        <p>
          Sign up and discover great<br/>
          amount of new opportunities!
        </p>
        <button className='btn-move' onClick={()=>{navigate('/signup')}}>Sign Up</button>
      </div>
    </div>
  )
}

export default SignIn;
