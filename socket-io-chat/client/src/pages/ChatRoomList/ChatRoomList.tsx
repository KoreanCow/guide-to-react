import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addRoom, resetRoom } from '../../redux/actions/ChatAction';

const ChatRoomList = () => {
  const dispatch = useDispatch();

  const chatRooms = useSelector((state: any) => state.chat);
  const [roomName, setRoomName] = useState<string>('');

  const onMakeHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (chatRooms.some((chatRoom: { roomname: string; }) => chatRoom.roomname === roomName)) {
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
      dispatch(addRoom([roomName]));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const response: any = await axios.get('http://localhost:3001');
        console.log('Response: ', response.data);
        dispatch(addRoom(response.data));
      } catch (e) {
        console.error(e);
      }
    };

    dispatch(resetRoom());
    fetchChatRooms();
  }, []);

  return (
    <div className='w-screen h-screen bg-white flex items-center justify-center flex-col'>
      <div className=" w-1/3 h-2/4 border border-solid border-gray-600 border-1 rounded-xl flex flex-col justify-around items-center">
        {
          chatRooms.map((room: any, index: number) => (
            <div key={index}>
              <Link to={`/chatRoom/${room.roomname}`} className='hover:opacity-40 transition-opacity duration-300'>
                {room.roomname}
              </Link>
            </div>
          ))
        }

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
