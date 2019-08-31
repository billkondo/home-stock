import { SignUpFormType } from 'models/sign_up';
import {
  LoginActionType,
  LOGIN,
  SIGN_UP_REQUEST,
  SignUpRequestActionType
} from './types';

export const loginAction = (): LoginActionType => {
  return {
    type: LOGIN
  };
};

export const signUpRequestAction = (
  form: SignUpFormType
): SignUpRequestActionType => {
  return {
    type: SIGN_UP_REQUEST,
    form
  };
};
