import React from 'react';
// library
import { Routes, Route } from 'react-router-dom';
// components
import Home from './page/Home';
import { CheckSignInPath, CheckSignUpPath } from './route/PrivateRoute';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* Redirect */}
        <Route path='/signup' element={<CheckSignUpPath/>}/>
        <Route path='/signin' element={<CheckSignInPath/>}/>
        <Route path='/todo' element={<CheckSignInPath />}/>
      </Routes>
    </div>
  );
}

export default App;