
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './page/Main';
import UseSdk from './page/UseSdk';
import { useKakaoLoader } from 'react-kakao-maps-sdk';
import PickMarker from './page/PickMarker';

function App() {
  const [loading, error] = useKakaoLoader({
    appkey: process.env.REACT_APP_KAKAO_KEY || '',
  })
  console.log(process.env.REACT_APP_KAKAO_KEY)

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/usesdk' element={<UseSdk />} />
      <Route path='/pick' element={<PickMarker />} />
    </Routes>
  )
}

export default App;
