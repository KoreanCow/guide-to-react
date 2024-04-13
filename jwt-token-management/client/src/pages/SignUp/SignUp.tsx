import React, { useState } from 'react';
import instance from '../../api/axios';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

interface State {
  id: string;
  password: string;
  nickname: string;
}

const SignUp = () => {
  const [state, setState] = useState<State>({ id: '', password: '', nickname: '' });
  const navigate = useNavigate();

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { id, password, nickname } = state;
      const response = await instance.post('/api/users/signup', { id, password, nickname });
      Swal.fire({
        icon: "success",
        title: "Sign Up Success",
        text: "Go to Login Page",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) navigate('/');
      });
      console.log(response);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "아이디 중복!",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='login__container'>
      <form className='signup__form' onSubmit={onSubmitHandler}>
        <input className='signup__input' type='text' name='id' placeholder='ID: ' value={state.id} onChange={handleChange} required />
        <input className='signup__input' type='text' name='nickname' placeholder='Nickname: ' value={state.nickname} onChange={handleChange} required />
        <input className='signup__input' type='password' name='password' placeholder='Password: ' value={state.password} onChange={handleChange} required />
        <div className='signup__button_container'>
          <button onClick={() => navigate('/')}>Login Page</button>
          <button type='submit'>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
