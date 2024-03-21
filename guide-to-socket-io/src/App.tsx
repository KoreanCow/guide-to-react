import React, { ReactElement, useEffect, useState } from 'react';
import io from 'socket.io-client'
import TextField from '@material-ui/core/TextField';
import './App.css';

interface IState {
  message: string;
  name: string;
}

// @ts-ignore
const socket = io.connect('http://localhost:4000');

function App() {
  const [state, setState] = useState<IState>({ message: '', name: '' })
  const [chat, setChat] = useState<IState[]>([]);

  useEffect(() => {
    socket.on('message', ({ name, message }: { name: string, message: string }) => {
      setChat(prevChat => [...prevChat, { name, message }])
      console.log(chat)
    })
  }, [])

  const onMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, message } = state;
    socket.emit('message', { name, message })
    setState({ message: '', name: name });

  }
  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>{name}: <span>{message}</span></h3>
      </div>
    ))
  }



  return (
    <div className="card">
      <form onSubmit={onMessageSubmit}>
        <h1>Messanger</h1>
        <div className="name-field">
          <TextField
            name='name'
            onChange={(e) => setState({ ...state, name: e.target.value })}
            value={state.name}
            label='Name'
          />
        </div>
        <div>
          <TextField
            name='message'
            onChange={(e) => setState({ ...state, message: e.target.value })}
            value={state.message}
            id='outlined-multiline-static'
            variant='outlined'
            label='Message'
          />
        </div>
        <button>Send Message</button>
      </form>

      <div className="render-chat">
        <h1>Chat Log</h1>
        {
          renderChat()
        }
      </div>
    </div>
  );
}

export default App;
