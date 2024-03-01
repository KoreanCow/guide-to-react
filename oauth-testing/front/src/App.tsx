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

        {/* <Route path='/auth/callback/git' element={<SignUpPage />} />
        <Route path='/auth/callback/google' element={<SignUpPage />} />
        <Route path='/auth/callback/kakao' element={<SignUpPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
