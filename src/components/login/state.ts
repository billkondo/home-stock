import { LoginStateType, LoginActionsType, CHANGE_TEXT } from './types';

export const reducer = (
  state: LoginStateType,
  action: LoginActionsType
): LoginStateType => {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        form: {
          ...state.form,
          [action.field]: action.text
        }
      };

    default:
      return state;
  }
};

export const initialState: LoginStateType = {
  form: {
    email: '',
    password: ''
  }
};
