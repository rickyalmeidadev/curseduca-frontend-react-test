export enum PostsTypes {
  POST_REQUEST = 'POST_REQUEST',
  POST_SUCCESS = 'POST_SUCCESS',
  POST_ERROR = 'POST_ERROR',
}

export interface PostsAction {
  type: PostsTypes;
  payload: Post[];
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
