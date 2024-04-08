import { combineReducers, createStore } from 'redux';
import chatReducer from './reducers/ChatReducer';

const rootReducer = combineReducers({
  chat: chatReducer
})

const store = createStore(rootReducer);

export default store;