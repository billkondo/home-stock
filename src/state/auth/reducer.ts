import { AuthStateType, AuthActionType } from './types';

const initialState: AuthStateType = {
  isLogged: false
};

export const loginReducer = (
  state = initialState,
  action: AuthActionType
): AuthStateType => {
  switch (action.type) {
    case 'AUTH_LOGIN':
      return state;

    default:
      return state;
  }
};
