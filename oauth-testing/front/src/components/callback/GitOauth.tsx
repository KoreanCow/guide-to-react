import axios from 'axios';
import { useEffect } from 'react';

const GitOauth = () => {

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:8080/auth/github/client-credentials');
      const { clientId, clientSecret } = response.data;

      const githubOAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user`;
      window.location.href = githubOAuthUrl;
    } catch (error) {
      console.error('Error initiating GitHub OAuth login:', error);
    }
  }
  useEffect(() => {
    const authCode = window.location.search.replace('?code=', '');
    console.log(authCode);

    if (!authCode) return;

    (async () => {
      const sendAuthCode = await axios.post('http://localhost:8080/auth/github/callback',
        { code: authCode }
      )
    })()
  }, [])
  return (

    <div>
      <button onClick={handleLogin}>Github OAuth 회원가입</button>
    </div>
  )
}

export default GitOauth;
