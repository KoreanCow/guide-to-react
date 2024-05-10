import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { instance } from '../api/axios';
import useAuthStore from '../store/AuthStore';

function Login() {
  const navigate = useNavigate();
  const { isLogined } = useAuthStore();

  const handleLogin = async () => {
    try {
      const response = await instance.get('/');
      const ClientId = response.data.key
      const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${ClientId}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`
      window.location.href = kakaoURL;
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="App">
      <button onClick={handleLogin}>
        카카오로그인
      </button>
      {isLogined ? <>로그인됨 </> : <>로그인 안됨</>}
    </div>
  );
}

export default Login;
