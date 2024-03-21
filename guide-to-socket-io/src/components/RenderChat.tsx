import React, { useEffect } from 'react'
import { IState } from '../App';
import { useSelector } from 'react-redux';

const RenderChat = () => {
  const reduxChats = useSelector((state: { chat: IState[] }) => state.chat)

  useEffect(() => {
    console.log(reduxChats)
  }, [reduxChats])
  return (
    <div>
      {
        reduxChats.map(({ name, message }, index) => (
          <div key={index}>
            <h3>{name} : <span>{message}</span></h3>
          </div>
        ))
      }
    </div>
  )
}

export default RenderChat
