import { ADD_MESSAGE, ChatActionTypes, ChatRoom, ChatMessage } from '../actions/chatAction';

const chatMessageReducer = (state: ChatRoom[] = [], action: ChatActionTypes): ChatRoom[] => {
  switch (action.type) {
    case ADD_MESSAGE:
      return state.map(chatRoom => {
        if (chatRoom.roomname === action.payload.roomname) {
          return {
            ...chatRoom,
            messages: [
              ...chatRoom.messages,
              action.payload
            ]
          };
        }
        return chatRoom;
      });
    default:
      return state;
  }
}

export default chatMessageReducer;
