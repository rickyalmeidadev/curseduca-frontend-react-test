import { PostsTypes, Post } from './types';

export const postRequest = () => {
  return {
    type: PostsTypes.POST_REQUEST,
  };
};

export const getPostsSuccess = (post: Post[]) => {
  return {
    type: PostsTypes.GET_POSTS_SUCCESS,
    payload: post,
  };
};

export const addPostSuccess = (post: Post) => {
  return {
    type: PostsTypes.ADD_POST_SUCCESS,
    payload: post,
  };
};

export const deletePostSuccess = (id: number) => {
  return {
    type: PostsTypes.DELETE_POST_SUCCESS,
    payload: id,
  };
};

export const postError = () => {
  return {
    type: PostsTypes.POST_ERROR,
  };
};
