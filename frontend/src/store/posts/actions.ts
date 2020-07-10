import { PostsTypes, Post, Author, Category } from './types';

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

export const getAuthors = (authors: Author[]) => {
  return {
    type: PostsTypes.GET_AUTHORS,
    payload: authors,
  };
};

export const getCategories = (categories: Category[]) => {
  return {
    type: PostsTypes.GET_CATEGORIES,
    payload: categories,
  };
};

export const setSelectedAuthors = (id: number) => {
  return {
    type: PostsTypes.SET_SELECTED_AUTHORS,
    payload: id,
  };
};

export const setSelectedCategories = (id: number) => {
  return {
    type: PostsTypes.SET_SELECTED_CATEGORIES,
    payload: id,
  };
};
