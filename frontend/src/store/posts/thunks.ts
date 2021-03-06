import api from '../../services/api';
import { History } from 'history';
import { Dispatch } from 'redux';
import {
  postRequest,
  getPostsSuccess,
  addPostSuccess,
  deletePostSuccess,
  postError,
  getAuthors,
  getCategories,
} from './actions';

import { Post } from './types';

export type NewPost = Omit<Post, 'id'>;

export const fetchGetPosts = () => {
  return async (dispatch: Dispatch) => {
    dispatch(postRequest());

    try {
      const response = await api.get('posts');
      dispatch(getPostsSuccess(response.data));
    } catch (error) {
      console.error('error: ', error);
      dispatch(postError());
    }
  };
};

export const fetchAddPosts = (data: NewPost, history: History) => {
  return async (dispatch: Dispatch) => {
    dispatch(postRequest());

    try {
      const response = await api.post('posts', data);
      dispatch(addPostSuccess(response.data));
      history.push('/');
    } catch (error) {
      console.error('error: ', error);
      dispatch(postError());
    }
  };
};

export const fetchDeletePosts = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(postRequest());

    try {
      await api.delete(`posts/${id}`);
      dispatch(deletePostSuccess(id));
    } catch (error) {
      console.error('error: ', error);
      dispatch(postError());
    }
  };
};

export const fetchGetAuthors = () => {
  return async (dispatch: Dispatch) => {
    dispatch(postRequest());

    try {
      const response = await api.get('users');
      /**
       * Here I used Object.values because the response returns an object,
       * so I had to transform it into an array.
       */
      dispatch(getAuthors(Object.values(response.data)));
    } catch (error) {
      console.error('error: ', error);
      dispatch(postError());
    }
  };
};

export const fetchGetCategories = () => {
  return async (dispatch: Dispatch) => {
    dispatch(postRequest());

    try {
      const response = await api.get('categories');
      dispatch(getCategories(response.data));
    } catch (error) {
      console.error('error: ', error);
      dispatch(postError());
    }
  };
};
