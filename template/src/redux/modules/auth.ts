// This is a sample redux module
// Put additional redux modules as files inside the `/modules` folder
// then make sure to add the reducer in `store.ts`
import { AppAction, AppState } from '~/model/Redux';

export interface AuthState {
  isLoggedIn: boolean;
}

export const initialState: AuthState = {
  isLoggedIn: false,
};

export const actions = {
  login: () => ({
    type: 'LOGIN',
  }),
  logout: () => ({
    type: 'LOGOUT',
  }),
};

export function reducer(
  state: AuthState = initialState,
  action: AppAction,
): AuthState {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

export const getIsAuthenticated = (state: AppState) => state.auth.isLoggedIn;
