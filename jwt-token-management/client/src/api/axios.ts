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
  async (config) => {
    if (!accessToken) return config;

    try {
      const response = await axios.post('/api/users/refresh-token', {}, {
        withCredentials: true // 쿠키를 포함한 요청을 보내기 위해 설정
      });
      const newAccessToken = response.data.accessToken;

      setAccessToken(newAccessToken);

      config.headers.Authorization = `Bearer ${newAccessToken}`;
    } catch (err) {
      console.error(err);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const setAccessToken = (token: string) => {
  accessToken = token;
}
export default instance;