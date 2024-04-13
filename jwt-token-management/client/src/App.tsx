import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'

function App() {

  return (
    <div className='body_container'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
