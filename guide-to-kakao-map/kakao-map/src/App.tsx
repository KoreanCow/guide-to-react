import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NoSdk from './page/NoSdk';
import Main from './page/Main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/nosdk' element={<NoSdk />} />
    </Routes>
  )
}

export default App;
