import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import ChatRoomList from './pages/ChatRoomList/ChatRoomList';
import ChatRoomDetail from './pages/ChatRoomDetail/ChatRoomDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ChatRoomList />} />
        <Route path='/chatRoom/:roomId' element={<ChatRoomDetail />} />
      </Routes>
    </>
  );
}

export default App;
