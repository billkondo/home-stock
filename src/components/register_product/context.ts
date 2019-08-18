import React from 'react';

import { RegisterProductState } from './types';
import { Tag } from 'models/tag';

interface RegisterProductContextInterface {
  state: RegisterProductState;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleMenu: (flag: boolean) => void;
  addTags: (tags: Array<Tag>) => void;
}

export const RegisterProductContext = React.createContext(
  {} as RegisterProductContextInterface
);

export const RegisterProductProvider = RegisterProductContext.Provider;
