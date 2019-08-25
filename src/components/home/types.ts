export type SignUpFormState = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type HomeStateType = {
  form: SignUpFormState;
};

export const CHANGE_TEXT = 'CHANGE_TEXT';
export type ChangeTextActionType = {
  type: typeof CHANGE_TEXT;
  text: string;
  field: string;
};

export type HomeActionsType = ChangeTextActionType;
