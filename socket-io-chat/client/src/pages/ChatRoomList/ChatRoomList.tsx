import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ADD_CHAT_ROOM, RESET_CHAT_ROOM } from '../../redux/actions/chatAction';
import { RootState } from '../../redux/store'

const ChatRoomList = () => {
  const dispatch = useDispatch();

  const chatRooms = useSelector((state: RootState) => state.room);
  const [roomName, setRoomName] = useState<string>('');

  const onMakeHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (chatRooms.some(chatRoom => chatRoom.roomname === roomName)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Room name already exists",
      });
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001', {
        roomName: roomName,
      });

      console.log('Response: ', response.data);
      Swal.fire('Created Successfully')
      dispatch({ type: ADD_CHAT_ROOM, payload: { roomname: roomName } });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const response: any = await axios.get('http://localhost:3001');
        response.data.forEach((roomName: string) => {
          dispatch({ type: ADD_CHAT_ROOM, payload: { roomname: roomName } })
        })
      } catch (e) {
        console.error(e);
      }
    }
    fetchChatRooms();
    return () => {
      dispatch({ type: RESET_CHAT_ROOM });
    };
  }, [dispatch]);

  return (
    <div className='w-screen h-screen bg-white flex items-center justify-center flex-col'>
      <div className=" w-1/3 h-2/4 border border-solid border-gray-600 border-1 rounded-xl flex flex-col justify-around items-center">
        {chatRooms.map((chatRoom, index) => (
          <div key={index}>
            <Link to={`/chatRoom/${chatRoom.roomname}`} className='hover:opacity-40 transition-opacity duration-300'>
              {chatRoom.roomname}
            </Link>
          </div>
        ))}
      </div>
      <div className=' mt-5'>
        <form onSubmit={onMakeHandler}>
          <input type='text' placeholder="ChatRoom's Name" value={roomName} onChange={(e) => setRoomName(e.target.value)} />
          <button type='submit' className='border border-1 rounded-lg text-gray-400 w-32 hover:text-black hover:border-black transition-all duration-200'>
            Make Rooms
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatRoomList;
