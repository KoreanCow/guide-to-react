import './App.scss'
import { Route, Routes } from 'react-router-dom';
import FisrtPage from './pages/first-page/FisrtPage';
import QuestionPage from './pages/question-page/QuestionPage';
import LoadingPage from './pages/loading-page/LoadingPage';
import ResultPage from './pages/result-page/ResultPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<FisrtPage />} /> {/* 첫 시작 페이지 */}
        <Route path='/question' element={<QuestionPage />} />
        <Route path='/loading' element={<LoadingPage />} />
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </>
  );
}

export default App;
