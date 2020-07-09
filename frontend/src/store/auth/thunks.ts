import api from '../../services/api';

import { Dispatch } from 'redux';
import { postRequest, postSuccess, postError } from './actions';
import { User } from './types';

interface Login {
  email: string;
  password: string;
}

export const fetchLogin = (data: Login) => {
  return async (dispatch: Dispatch) => {
    dispatch(postRequest());

    try {
      const responseLogin = await api.post('auth/login', data);
      api.defaults.headers.Authorization = `Bearer ${responseLogin.data.access_token}`;

      const responseUsers = await api.get('/users');

      let user = {} as User;

      for (const id in responseUsers.data) {
        if (responseUsers.data[id].email === data.email) {
          user = responseUsers.data[id];
        }
      }

      dispatch(postSuccess(user));
    } catch (error) {
      dispatch(postError());
    }
  };
};
