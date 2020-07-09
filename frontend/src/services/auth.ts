import jwtDecode from 'jwt-decode';
import api from './api';

const TOKEN_KEY = 'CURSEDUCA_TOKEN';

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export const isAuthenticated = () => {
  const token = localStorage.getItem(TOKEN_KEY);

  api.defaults.headers.common.Authorization = `Bearer ${token}`;

  if (token) {
    const parsedToken = JSON.parse(token);
    api.defaults.headers.common.Authorization = `Bearer ${parsedToken}`;

    return jwtDecode(parsedToken);
  }
};
