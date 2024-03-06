import React from 'react';
import axios from 'axios';

const Git = () => {
  const handleGitLogin = async () => {
    try {
      window.location.href = 'http://localhost:8080/auth/github';
    } catch (error) {
      console.error('GitHub OAuth error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleGitLogin}>GitHub OAuth 로그인</button>
    </div>
  );
};

export default Git;
