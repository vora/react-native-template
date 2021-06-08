import { AppState } from '~/model/Redux';
import { combineReducers } from 'redux';

import {
  initialState as authState,
  reducer as authReducer,
} from './modules/auth';

export const initialState: AppState = {
  auth: authState,
  // Add additional initialState objects here
};

export const rootReducer = combineReducers<AppState>({
  auth: authReducer,
  // Add additional reducers here
});

// Reducers to be persisted by redux-persist
export const persistWhitelist: Array<keyof AppState> = ['auth'];
