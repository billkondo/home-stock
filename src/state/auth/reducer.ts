import { AuthStateType, AuthActionType, LOGIN } from './types';

const initialState: AuthStateType = {
  isLogged: false
};

export const loginReducer = (
  state = initialState,
  action: AuthActionType
): AuthStateType => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state, 
        isLogged: true
      };

    default:
      return state;
  }
};
