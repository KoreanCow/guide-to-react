// reducers/chatRoomReducer.ts

import { ADD_CHAT_ROOM, RESET_CHAT_ROOM, ChatActionTypes, ChatRoom } from '../actions/chatAction';

const chatRoomReducer = (state: ChatRoom[] = [], action: ChatActionTypes): ChatRoom[] => {
  switch (action.type) {
    case ADD_CHAT_ROOM:
      return [
        ...state,
        {
          roomname: action.payload.roomname,
          messages: []
        }
      ];
    case RESET_CHAT_ROOM:
      return [];
    default:
      return state;
  }
}

export default chatRoomReducer;
