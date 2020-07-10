import { PostsState, PostsTypes, PostsAction, Post, Author, Category } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: PostsState = {
  data: [],
  loading: false,
  error: false,
  categories: [],
  authors: [],
  categoriesSelected: [],
  authorsSelected: [],
};

const reducer: Reducer<PostsState, PostsAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostsTypes.POST_REQUEST:
      return { ...state, loading: true, error: false };

    case PostsTypes.GET_POSTS_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload as Post[] };

    case PostsTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, action.payload as Post],
      };

    case PostsTypes.DELETE_POST_SUCCESS:
      // payload = id
      return {
        ...state,
        loading: false,
        error: false,
        data: state.data.filter(post => post.id !== (action.payload as number)),
      };

    case PostsTypes.POST_ERROR:
      return { ...state, loading: false, error: true };

    case PostsTypes.GET_AUTHORS:
      return { ...state, authors: action.payload as Author[] };

    case PostsTypes.GET_CATEGORIES:
      return { ...state, categories: action.payload as Category[] };

    default:
      return state;
  }
};

export default reducer;
