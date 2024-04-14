import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import instance, { setAccessToken } from '../../api/axios';
import { useCookies } from 'react-cookie';

interface State {
  id: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<State>({ id: '', password: '' });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie] = useCookies(['refreshToken']);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { id, password } = state;
      const response = await instance.post('/api/users/login', { id, password })

      const { accessToken, refreshToken } = response.data;
      setAccessToken(accessToken);
      setCookie('refreshToken', refreshToken, { path: '/' })

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className='login__container'>
      <form className='login__form' onSubmit={onSubmitHandler}>
        <input className='login__input' type='text' name='id' placeholder='ID: ' value={state.id} onChange={handleChange} required />
        <input className='login__input' type='password' name='password' placeholder='Password: ' value={state.password} onChange={handleChange} required />
        <div className='login__button_container'>
          <button type='submit'>Login</button>
          <button onClick={() => navigate('/signup')}>SignUp Page</button>
        </div>
      </form>
    </div>
  )
}

export default Login
