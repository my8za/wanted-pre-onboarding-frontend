import React, { useState } from 'react'
// library
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// api url
import { API_URL } from '../utils/constants/Config';
// style sheet
import '../style/signUp.scss';

const SignUp = () => {
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

  const handleClickSignUp = async() => {
    console.log(form)
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
    <div className='page'>
      <div className='sign-up'>
        <h2>With Us &#128522;</h2>
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
              data-testid="password-input"
              type='password'
              onChange={(e)=>{onChangePassword(e)}}
            />
          </div>
        </form>
        <button 
          className='btn' 
          data-testid="signup-button" 
          onClick={handleClickSignUp} 
          disabled={!(isEmail && isPassword)}
        >
            회원가입
        </button>
      </div>
      <div className='text-content'>
        <h3>Welcome back,</h3>
        <p>
          아래 버튼을 클릭하면<br/>
          로그인 페이지로 이동합니다
        </p>
        <button className='btn-move' onClick={()=>{navigate('/signin')}}>Sign In</button>
      </div>
    </div>
  )
}

export default SignUp;