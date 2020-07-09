import { AuthState, AuthTypes, AuthAction, User } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: AuthState = {
  user: {} as User,
  loading: false,
  error: false,
};

const reducer: Reducer<AuthState, AuthAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.AUTH_REQUEST:
      return { ...state, loading: true, error: false };

    case AuthTypes.AUTH_SUCCESS:
      return { ...state, loading: false, error: false, user: action.payload };

    case AuthTypes.AUTH_ERROR:
      return { ...state, loading: false, error: true, user: {} as User };

    default:
      return state;
  }
};

export default reducer;
