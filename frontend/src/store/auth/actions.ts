import { AuthTypes, User } from './types';
import { getUser } from '../../services/auth';

export const authRequest = () => {
  return {
    type: AuthTypes.AUTH_REQUEST,
  };
};

export const authSuccess = (user: User) => {
  return {
    type: AuthTypes.AUTH_SUCCESS,
    payload: user,
  };
};

export const authPersisted = () => {
  const userFromLocalStorage = getUser();
  let user = {} as User;
  if (userFromLocalStorage) {
    user = JSON.parse(userFromLocalStorage);
  }

  return {
    type: AuthTypes.AUTH_SUCCESS,
    payload: user,
  };
};

export const authError = () => {
  return {
    type: AuthTypes.AUTH_ERROR,
  };
};
