import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/signup',
        { email, password, name })
      console.log(response)
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div className='container'>
      <h1>
        SignUp Page
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
        <label className='inputLabel'>
          <span>Name : </span>
          <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button type='submit'>
          회원가입
        </button>
      </form>

      <Link to='/' > Back to Root Page</Link>
    </div>
  );
}

export default SignUp;