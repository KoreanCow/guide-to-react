import { combineReducers, createStore } from 'redux';
import chatRoomReducer from './reducers/chatRoomReducer';
import chatMessageReducer from './reducers/chatMessageReducer';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  room: chatRoomReducer,
  message: chatMessageReducer
})

const store = createStore(rootReducer);

export default store;