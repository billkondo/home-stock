import { SignUpFormType } from 'models/sign_up';

export const LOGIN = 'AUTH_LOGIN';
export const SIGN_UP_REQUEST = 'AUTH_SIGN_UP_REQUEST';

export type LoginActionType = {
  type: typeof LOGIN;
};

export type SignUpRequestActionType = {
  type: typeof SIGN_UP_REQUEST;
  form: SignUpFormType;
};

export type AuthActionType = LoginActionType | SignUpRequestActionType;

export type AuthStateType = {
  isLogged: boolean;
};
