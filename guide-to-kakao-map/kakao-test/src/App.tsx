import { useKakaoLoader } from 'react-kakao-maps-sdk'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './page/Main'
import UseSdk from './page/UseSdk'

function App() {
  const [loading, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_APP_KAKAO_KEY,
  })

  console.log(import.meta.env.VITE_APP_KAKAO_KEY)
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/usesdk' element={<UseSdk />} />
    </Routes>
  )
}

export default App
