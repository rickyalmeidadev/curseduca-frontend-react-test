import api from '../../services/api';

import { Dispatch } from 'redux';
import {
  postRequest,
  getPostsSuccess,
  addPostSuccess,
  deletePostSuccess,
  postError,
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

export const fetchAddPosts = (data: NewPost) => {
  return async (dispatch: Dispatch) => {
    dispatch(postRequest());

    try {
      const response = await api.post('posts', data);
      dispatch(addPostSuccess(response.data));
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
