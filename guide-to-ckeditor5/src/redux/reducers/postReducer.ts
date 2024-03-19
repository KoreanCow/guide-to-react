import { IPost } from './../actions/postAction';
import { ActionTypes } from '../actions/postAction'

const initialState: IPost[] = [{
  id: '1',
  title: '하나',
  contents: '하나'
}, {
  id: '2',
  title: '둘',
  contents: '둘'
}];

const postReducer = (state = initialState,
  action: {
    type: ActionTypes, payload: IPost
  }) => {
  switch (action.type) {
    case ActionTypes.POST:
      return [...state, action.payload]
    default: return state;
  }
}

export default postReducer;