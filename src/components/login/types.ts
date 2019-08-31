import { SignInFormType } from 'models/sign_in';

export type SignInFormState = SignInFormType;

export type LoginStateType = {
  form: SignInFormType;
};

export const CHANGE_TEXT = 'CHANGE_TEXT';
export type ChangeTextActionType = {
  type: typeof CHANGE_TEXT;
  text: string;
  field: string;
};

export type LoginActionsType = ChangeTextActionType;
