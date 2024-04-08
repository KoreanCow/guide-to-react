import { ADD_CHAT, ADD_MESSAGE_TO_ROOM, ADD_ROOM, IRoom, RESET_ROOM } from '../actions/ChatAction';

const initailState: IRoom[] = [];

const chatReducer = (state = initailState, action: any) => {
  switch (action.type) {
    case ADD_CHAT:
      return state.map(room => {
        if (room.roomname === action.payload.roomname) {
          return {
            ...room,
            messages: [...room.messages, action.payload.message]
          };
        }
        return room;
      });
    case ADD_ROOM:
      const newRooms = action.payload.map((roomname: any) => ({ roomname, messages: [] }));
      return [...state, ...newRooms];
    case ADD_MESSAGE_TO_ROOM:
      return state.map(room => {
        if (room.roomname === action.payload.roomname) {
          return {
            ...room,
            messages: [...room.messages, action.payload.message]
          };
        }
        return room;
      });
    case RESET_ROOM:
      return initailState;
    default:
      return state;
  }
}

export default chatReducer;