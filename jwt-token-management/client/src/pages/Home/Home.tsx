import React, { useEffect, useState } from 'react';
import instance from '../../api/axios';
interface State {
  nickname: string;
}
const Home = () => {
  const [userData, setUserData] = useState<State>({ nickname: '' });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await instance.get('/home');
        setUserData(response.data);
      } catch (error) {
        console.error('유저 정보를 가져오는 데 실패했습니다:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {Object.keys(userData).length > 0 ? (
        <div>
          <p>Your nickname: {userData.nickname}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
