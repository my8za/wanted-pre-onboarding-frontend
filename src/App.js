import React from 'react';
// library
import { Routes, Route } from 'react-router-dom';
// components
import Home from './page/Home';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';
import Todo from './page/Todo';
import { CheckSignInPath, CheckSignUpPath } from './route/PrivateRoute';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* Redirect */}
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        {/* <Route path='/todo' element={<Todo />}/> */}
        {/* <Route path='/signup' element={<CheckSignUpPath/>}/>
        <Route path='/signin' element={<CheckSignInPath/>}/> */}
        <Route path='/todo' element={<CheckSignInPath />}/>
      </Routes>
    </div>
  );
}

export default App;
