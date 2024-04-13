import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

interface State {
  id: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<State>({ id: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { id, password } = state;
      console.log(id, password);

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
