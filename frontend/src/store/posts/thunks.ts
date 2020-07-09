import api from '../../services/api';

import { Dispatch } from 'redux';
import { postRequest, postSuccess, postError } from './actions';
import { Post } from './types';

type NewPost = Omit<Post, 'id'>;

export const fetchGetPosts = () => {
  return async (dispatch: Dispatch) => {
    dispatch(postRequest());

    try {
      const response = await api.get('posts');
      dispatch(postSuccess(response.data));
    } catch (error) {
      console.error('error: ', error);
      dispatch(postError());
    }
  };
};
