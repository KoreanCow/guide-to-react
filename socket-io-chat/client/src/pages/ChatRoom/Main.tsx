import React, { useEffect } from 'react'
import { io } from 'socket.io-client'


const Main = () => {
  useEffect(() => {
    const socket = io(process.env.REACT_APP_SERVER_URL || '', { withCredentials: true });

    socket.on('connect', () => {
      console.log('connected to server')
    })

    return () => {
      socket.disconnect();
    }
  }, [])
  return (
    <div className=' w-70 h-7 bg-cyan-300'>
      asdasdads
    </div>
  )
}

export default Main
