import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Main from './pages/ChatRoom/Main';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
