import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Write from './pages/write';
import Detail from './pages/detail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/:id' element={<Detail />} />
      <Route path='/write' element={<Write />} />
    </Routes>
  );
}

export default App;
