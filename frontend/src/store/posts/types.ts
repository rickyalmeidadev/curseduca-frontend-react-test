export enum PostsTypes {
  POST_REQUEST = 'POST_REQUEST',
  GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
  ADD_POST_SUCCESS = 'ADD_POST_SUCCESS',
  DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS',
  POST_ERROR = 'POST_ERROR',
  GET_AUTHORS = 'GET_AUTHORS',
  GET_CATEGORIES = 'GET_CATEGORIES',
  SET_SELECTED_AUTHORS = 'SET_SELECTED_AUTHORS',
  SET_SELECTED_CATEGORIES = 'SET_SELECTED_CATEGORIES',
}

export interface PostsAction {
  type: PostsTypes;
  payload: Post[] | Post | number | Author[] | Category[];
}

export interface Post {
  id: number;
  title: string;
  text: string;
  id_category: number;
  id_user: number;
  date: Date;
}

export interface Category {
  id: number;
  name: string;
}

export interface Author {
  id: number;
  email: string;
}

export interface PostsState {
  readonly data: Post[];
  readonly loading: boolean;
  readonly error: boolean;
  readonly categories: Category[];
  readonly authors: Author[];
  readonly categoriesSelected: number[];
  readonly authorsSelected: number[];
}
