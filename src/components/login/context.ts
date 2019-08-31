import React from 'react';

import { SignInFormState } from './types';

interface LoginContextInterface {
  form: SignInFormState;
  changeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLogged: boolean;
  createSession: () => void;
}

export const LoginContext = React.createContext({} as LoginContextInterface);
export const LoginProvider = LoginContext.Provider;
