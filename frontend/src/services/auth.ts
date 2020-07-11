import jwtDecode from 'jwt-decode';
import api from './api';
import { User } from '../store/auth/types';

const TOKEN_KEY = 'CURSEDUCA_TOKEN';
const USER_KEY = 'CURSEDUCA_USER';

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export const setUser = (user: User) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const getUser = () => {
  return localStorage.getItem(USER_KEY);
};

export const clearUserAndTokenFromLocalStorage = () => {
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = () => {
  const token = getToken();

  api.defaults.headers.common.Authorization = `Bearer ${token}`;

  if (token) {
    const parsedToken = JSON.parse(token);
    api.defaults.headers.common.Authorization = `Bearer ${parsedToken}`;

    return jwtDecode(parsedToken);
  }
};
