import { AuthTypes, User } from './types';

export const postRequest = () => {
  return {
    type: AuthTypes.AUTH_REQUEST,
  };
};

export const postSuccess = (user: User) => {
  return {
    type: AuthTypes.AUTH_SUCCESS,
    payload: user,
  };
};

export const postError = () => {
  return {
    type: AuthTypes.AUTH_ERROR,
  };
};
