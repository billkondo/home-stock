import React from 'react';

import { SignUpFormState } from './types';

interface HomeContextInterface {
  form: SignUpFormState;
  changeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  createUser: () => void;
}

export const HomeContext = React.createContext({} as HomeContextInterface);

export const HomeProvider = HomeContext.Provider;
