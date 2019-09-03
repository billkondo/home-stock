import React from 'react';

import { SignUpFormState } from './types';
import { ComponentContextType } from 'models/component_context';

interface HomeContextInterface {
  form: SignUpFormState;
  changeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  createUser: () => void;
  isLogged: boolean;
  SignUpContext: ComponentContextType;
}

export const HomeContext = React.createContext({} as HomeContextInterface);
export const HomeProvider = HomeContext.Provider;
