import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/home.scss';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='home'>
      <h1 className='title'>Web Todo-List &#127936;</h1>
      <button onClick={()=>{navigate('/signup')}}>Sign Up</button>
      <button onClick={()=>{navigate('/signin')}}>Sign In</button>
      <button onClick={()=>{navigate('/todo')}}>Todo</button>
    </div>
  )
}

export default Home
