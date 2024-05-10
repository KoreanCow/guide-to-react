import React, { useEffect } from 'react'
import { useUserStore } from '../store/UserStore'
import useAuthStore from '../store/AuthStore';
import { instance } from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

const Logined = () => {
  const { nickname, profileImg } = useUserStore();
  const { isLogined, setLogout } = useAuthStore();
  const cookies = new Cookies();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogined) {
      navigate('/');
    }
  }, [isLogined])
  const handleLogout = async () => {

    try {
      // const response = await instance.get('/logout');
      navigate('/')
      cookies.remove('accessToken')
      setLogout();
    } catch (err) {
      console.error(err);
    }
    setLogout();


  }
  return (
    <div>
      {nickname}
      <img src={profileImg} alt="user Img" />

      <button onClick={handleLogout}>
        로그아웃
      </button>
      <p>
        {isLogined ? <>로그인됨 </> : <>로그인 안됨</>}
      </p>
    </div>
  )
}

export default Logined
