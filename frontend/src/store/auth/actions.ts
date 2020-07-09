import { AuthTypes, User } from './types';

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

export const authError = () => {
  return {
    type: AuthTypes.AUTH_ERROR,
  };
};
