export const ADD_CHAT = 'ADD_CHAT';
export const ADD_ROOM = 'ADD_ROOM';
export const ADD_MESSAGE_TO_ROOM = 'ADD_MESSAGE_TO_ROOM';
export const RESET_ROOM = 'RESET_ROOM'

export interface IChat {
  username: string;
  message: string;
}

export interface IRoom {
  roomname: string;
  messages: IChat[];
}

export const chating = ({ username, message }: IChat) => ({
  type: ADD_CHAT,
  payload: { username, message }
})

export const addRoom = (roomname: string[]) => ({
  type: ADD_ROOM,
  payload: roomname
})

export const addMessageToRoom = ({ roomname, message }: { roomname: string; message: IChat }) => ({
  type: ADD_MESSAGE_TO_ROOM,
  payload: { roomname, message }
})

export const resetRoom = () => ({
  type: RESET_ROOM
});