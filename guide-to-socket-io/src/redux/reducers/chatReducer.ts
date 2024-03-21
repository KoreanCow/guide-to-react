import { CHAT, IChat } from '../actions/chatAction'

const initialState: IChat[] = [];

const chatReducer = (state = initialState, action: {
  type: string,
  payload: IChat
}) => {
  switch (action.type) {
    case CHAT:
      return [...state, action.payload]
    default: return state;
  }
}

export default chatReducer