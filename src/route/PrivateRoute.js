import React from 'react'
// library
import SignIn from '../page/SignIn';
import SignUp from '../page/SignUp';
// components
import Todo from '../page/Todo'


// 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 /signin 경로로 리다이렉트
// 로컬 스토리지에 토큰이 있는 상태로 /signin페이지에 접속한다면 /todo 경로로 리다이렉트
export const CheckSignInPath = () => {
  return localStorage.getItem('jwt-token') ? <Todo /> : <SignIn/>
}

// 로컬 스토리지에 토큰이 있는 상태로 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트
export const CheckSignUpPath = () => {
  return localStorage.getItem('jwt-token') ? <Todo /> : <SignUp/>
}