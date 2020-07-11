import { PostsState, PostsTypes, PostsAction, Post, Author, Category } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: PostsState = {
  data: [],
  loading: false,
  error: false,
  categories: [],
  authors: [],
  authorsSelected: [],
  categoriesSelected: [],
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

    case PostsTypes.SET_SELECTED_AUTHORS:
      const id = action.payload as number;

      const found = state.authorsSelected.find(authorId => authorId === id);

      if (found) {
        return {
          ...state,
          authorsSelected: state.authorsSelected.filter(authorId => authorId !== id),
        };
      }

      state.authorsSelected.push(id);
      return { ...state };

    // case PostsTypes.SET_SELECTED_CATEGORIES:
    //   return { ...state, categoriesSelected: action.payload };

    default:
      return state;
  }
};

export default reducer;
