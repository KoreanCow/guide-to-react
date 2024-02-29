import { Route, Routes } from 'react-router-dom';
import './App.scss';

import SignInPage from './page/signin/SignIn';
import SignUpPage from './page/signup/SignUp';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
