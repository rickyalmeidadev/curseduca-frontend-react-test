import { PostsTypes, Post } from './types';

export const postRequest = () => {
  return {
    type: PostsTypes.POST_REQUEST,
  };
};

export const postSuccess = (post: Post[]) => {
  return {
    type: PostsTypes.POST_SUCCESS,
    payload: post,
  };
};

export const postError = () => {
  return {
    type: PostsTypes.POST_ERROR,
  };
};
