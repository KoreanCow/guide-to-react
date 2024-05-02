import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NoSdk from './page/NoSdk';
import Main from './page/Main';
import UseSdk from './page/UseSdk';
import { useKakaoLoader } from 'react-kakao-maps-sdk';

function App() {
  const [loading, error] = useKakaoLoader({
    appkey: process.env.REACT_APP_KAKAO_KEY || '',
  })
  console.log(process.env.REACT_APP_KAKAO_KEY)

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/nosdk' element={<NoSdk />} />
      <Route path='/usesdk' element={<UseSdk />} />
    </Routes>
  )
}

export default App;
