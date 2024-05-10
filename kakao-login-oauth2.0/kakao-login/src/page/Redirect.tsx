import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useUserStore } from '../store/UserStore';
import useAuthStore from '../store/AuthStore';
import { useCookies } from 'react-cookie';
import { instance } from '../api/axios';

const Redirect = () => {
  const { setNickname, setProfileImg } = useUserStore();
  const { setLogined } = useAuthStore();
  const [, setCookies] = useCookies(['accessToken']);

  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    const fetchingInfo = async () => {
      try {
        const response = await instance.post('/', { code })
        console.log(response.data);
        setNickname(response.data.user.properties.nickname);
        setProfileImg(response.data.user.properties.profile_image);
        setLogined();
        setCookies('accessToken', response.data.accessToken, { path: '/' })

        navigate('/Logined');
      } catch (err) {
        console.error(err);
      }
    };

    fetchingInfo();
  }, []);

  return (
    <div>
      로그인 중입니다!
    </div>
  );
};

export default Redirect;
