import { createStore, Store, applyMiddleware } from 'redux';
import { PostsState } from './posts/types';
import { AuthState } from './auth/types';

import rootReducer from './rootReducers';

import thunk from 'redux-thunk';

export interface ApplicationState {
  posts: PostsState;
  auth: AuthState;
}

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(thunk));

export default store;
