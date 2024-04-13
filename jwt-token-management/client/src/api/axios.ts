import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

let accessToken: string | null = null;

instance.interceptors.request.use(
  (config) => {
    // 요청 전에 액세스 토큰이 있는지 확인하고 헤더에 추가
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const setAccessToken = (token: string) => {
  accessToken = token;
};


export default instance;