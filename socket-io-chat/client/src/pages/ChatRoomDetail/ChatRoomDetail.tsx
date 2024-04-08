
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

export interface IState {
  username: string;
  message: string;
}

const ChatRoomDetail = () => {
  const dispatch = useDispatch();
  const { roomname } = useParams();
  const socket = io(`${process.env.REACT_APP_SERVER_URL}/${roomname}`, { withCredentials: true });
  const [state, setState] = useState<IState>({ message: '', username: '' });

  console.log(roomname);

  useEffect(() => {
    socket.on('message', ({ username, message }: { username: string, message: string }) => {
      const newChat = { username, message, roomname };
      // @ts-ignore
      dispatch(addChatingMessage(newChat));
    });

    return () => {
      socket.disconnect();
      console.log(`exit ${roomname} room`);
    };
  }, []);

  const onSubmitHandler = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const { username, message } = state;
    socket.emit('message', { username, message })

    setState({ message: '', username: username });
  };

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <div className='flex flex-wrap w-4/5 h-4/5'>
        <div className='w-3/4 h-3/4 border border-solid rounded-lg'>dsa</div>
        <form onSubmit={onSubmitHandler}>
          <input type='text' placeholder='nickname' value={state.username} onChange={(e) => setState({ ...state, username: e.target.value })} />
          <input type='text' placeholder='message' value={state.message} onChange={(e) => setState({ ...state, message: e.target.value })} />
          <button type='submit' className='border border-1 rounded-lg text-gray-400 w-32 hover:text-black hover:border-black transition-all duration-200'>
            Send Message
          </button>
        </form>
      </div>
      <p>{`Welcome to ${roomname} chat room`}</p>
      <Link to='/'>Back to Home</Link>
    </div>
  );
};

export default ChatRoomDetail;
