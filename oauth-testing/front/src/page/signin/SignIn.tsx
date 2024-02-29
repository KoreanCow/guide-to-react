import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080',
        { email, password })
      console.log(response);
    } catch (e) {

    }
  }

  return (
    <div className='container'>
      <h1>
        Login Page
      </h1>
      <form onSubmit={onSubmit}>
        <label className='inputLabel'>
          <span>Email : </span>
          <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className='inputLabel'>
          <span>Password : </span>
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type='submit'>
          로그인
        </button>
      </form>
      <Link to='/signup'>Sign Up</Link>
    </div>
  );
}

export default SignIn;