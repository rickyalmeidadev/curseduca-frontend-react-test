import { PostsState, PostsTypes, PostsAction } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: PostsState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<PostsState, PostsAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostsTypes.POST_REQUEST:
      return { ...state, loading: true };

    case PostsTypes.POST_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };

    case PostsTypes.POST_ERROR:
      return { ...state, loading: false, error: true, data: [] };

    default:
      return state;
  }
};

export default reducer;
