
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import { addMessageToRoom } from '../../redux/actions/ChatAction';

export interface IState {
  username: string;
  message: string;
}

const ChatRoomDetail = () => {

  const dispatch = useDispatch();
  const { roomname } = useParams();
  const [state, setState] = useState<IState>({ message: '', username: '' });
  const [socket, setSocket] = useState<Socket | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);


  const chatRooms = useSelector((state: any) => state.chat).find((room: any) => room.roomname === roomname)?.messages || [];
  useEffect(() => {
    const newSocket = io(`${process.env.REACT_APP_SERVER_URL}/${roomname}`, { withCredentials: true });
    setSocket(newSocket);
    console.log(`${roomname} room socket connected`)
    return () => {
      newSocket.disconnect();
      console.log('exit chat room')
    }
  }, [])
  useEffect(() => {
    if (socket) {
      socket.on('message', (data) => {
        console.log('Received message:', data);
        const { username, message } = data;
        const newData: any = { roomname, message: { username, message } };
        dispatch(addMessageToRoom(newData));
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      });
    }
  }, [socket])

  const onSubmitHandler = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (socket && state.message && state.username) {
      socket.emit('message', { username: state.username, message: state.message });
      setState({ ...state, message: '' });
    }
  };

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <p>
      </p>
      <div className='flex flex-wrap w-4/5 h-4/5'>
        <div className='w-3/4 h-3/4 border border-solid rounded-lg overflow-y-auto' ref={chatContainerRef}>
          {chatRooms.map((msg: any, index: number) => (
            <div className={`ml-3 mt-2`} key={index}>
              <span className={` ${state.username === msg.username ? ' text-bold text-2xl text-blue-400' : ''}`}>{msg.username}</span>
              <span>: {msg.message}</span>
            </div>
          ))}
          <div className=' h-10 ' />
        </div>
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
