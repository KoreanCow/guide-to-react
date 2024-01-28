import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import QuestionComponent from './pages/QuestionComponent';
import ResultPage from './pages/ResultPage';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/question' element={<QuestionComponent />} />
      <Route path='/result' element={<ResultPage />} />
    </Routes>
  );
}

export default App;