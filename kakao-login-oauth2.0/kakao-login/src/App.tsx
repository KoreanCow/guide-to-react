import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Login from './page/Login'
import Logined from './page/Logined'
import Redirect from './page/Redirect'
import useAuthStore from './store/AuthStore'

const App = () => {
  const { isLogined } = useAuthStore();
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/oauth' element={<Redirect />} />
      <Route path='logined' element={isLogined ? <Logined /> : <Login />} />
    </Routes>
  )
}

export default App
