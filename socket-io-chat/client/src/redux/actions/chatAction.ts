export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_CHAT_ROOM = 'ADD_CHAT_ROOM';
export const RESET_CHAT_ROOM = 'RESET_CHAT_ROOM';

export interface ChatMessage {
  username: string;
  message: string;
  roomname: string;
}

export interface ChatRoom {
  roomname: string;
  messages: ChatMessage[];
}

export interface AddChatRoomAction {
  type: typeof ADD_CHAT_ROOM;
  payload: {
    roomname: string;
  };
}

export interface AddChatingMessageAction {
  type: typeof ADD_MESSAGE;
  payload: ChatMessage;
}

export interface ResetChatRoomAction {
  type: typeof RESET_CHAT_ROOM;
}

export type ChatActionTypes = AddChatRoomAction | AddChatingMessageAction | ResetChatRoomAction;

export const addChatRoom = ({ roomname }: ChatRoom): AddChatRoomAction => ({
  type: ADD_CHAT_ROOM,
  payload: { roomname }
})

export const addChatingMessage = ({ username, message, roomname }: ChatMessage): AddChatingMessageAction => ({
  type: ADD_MESSAGE,
  payload: { username, message, roomname }
})

export const resetChatRoom = (): ResetChatRoomAction => ({
  type: RESET_CHAT_ROOM
});
