import api from '../../services/api';
import { setToken, setUser } from '../../services/auth';

import { Dispatch } from 'redux';
import { authRequest, authSuccess, authError } from './actions';
import { User } from './types';

interface Login {
  email: string;
  password: string;
}

export const fetchLogin = (data: Login) => {
  return async (dispatch: Dispatch) => {
    dispatch(authRequest());

    try {
      const responseLogin = await api.post('auth/login', data);

      const { access_token } = responseLogin.data;

      api.defaults.headers.common.Authorization = `Bearer ${access_token}`;
      setToken(access_token);

      const responseUsers = await api.get('/users');

      let user = {} as User;

      for (const id in responseUsers.data) {
        if (responseUsers.data[id].email === data.email) {
          user = responseUsers.data[id];
        }
      }

      setUser(user);

      dispatch(authSuccess(user));
    } catch (error) {
      console.error('error: ', error);
      dispatch(authError());
    }
  };
};
