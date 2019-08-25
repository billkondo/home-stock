import { HomeStateType, HomeActionsType, CHANGE_TEXT } from './types';

export const reducer = (
  state: HomeStateType,
  action: HomeActionsType
): HomeStateType => {
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

export const initialState: HomeStateType = {
  form: {
    email: '',
    name: '',
    password: '',
    passwordConfirmation: ''
  }
};
