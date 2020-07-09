import { createStore, Store } from 'redux';
import { PostsState } from './posts/types';
import { AuthState } from './auth/types';

import rootReducer from './rootReducers';

export interface ApplicationState {
  posts: PostsState;
  auth: AuthState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
