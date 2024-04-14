/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home'


function App() {

  return (
    <div className='body_container'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App
