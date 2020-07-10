export enum PostsTypes {
  POST_REQUEST = 'POST_REQUEST',
  GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
  ADD_POST_SUCCESS = 'ADD_POST_SUCCESS',
  DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS',
  POST_ERROR = 'POST_ERROR',
}

export interface PostsAction {
  type: PostsTypes;
  payload: Post[] | Post | number;
}

export interface Post {
  id: number;
  title: string;
  text: string;
  id_category: number;
  id_user: number;
  date: Date;
}

export interface PostsState {
  readonly data: Post[];
  readonly loading: boolean;
  readonly error: boolean;
}
