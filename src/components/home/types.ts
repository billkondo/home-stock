import { SignUpFormType } from 'models/sign_up';

export type SignUpFormState = SignUpFormType;

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
