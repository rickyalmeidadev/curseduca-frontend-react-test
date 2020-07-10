export enum AuthTypes {
  AUTH_REQUEST = 'AUTH_REQUEST',
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_PERSISTED = 'AUTH_PERSISTED',
  AUTH_ERROR = 'AUTH_ERROR',
}

export interface AuthAction {
  type: AuthTypes;
  payload: User;
}

export interface User {
  id: number;
  email: string;
}

export interface AuthState {
  readonly user: User;
  readonly loading: boolean;
  readonly error: boolean;
}
