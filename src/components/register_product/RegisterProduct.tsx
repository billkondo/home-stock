import React, { useReducer } from 'react';

import { Tag } from 'models/tag';
import { RegisterProductProvider } from './context';
import { initialState, reducer } from './state';
import RegisterProductUI from './UI/Main';

const RegisterProduct = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'CHANGE_TEXT',
      name: e.target.name,
      value: e.target.value
    });
  };

  const toggleMenu = (flag: boolean) => {
    dispatch({
      type: 'TOGGLE_MENU',
      flag
    });
  };

  const addTags = (tags: Array<Tag>) => {
    dispatch({
      type: 'ADD_TAGS',
      tags
    });
  };

  return (
    <RegisterProductProvider
      value={{
        state,
        handleChange,
        toggleMenu,
        addTags
      }}
    >
      <RegisterProductUI />
    </RegisterProductProvider>
  );
};

export default RegisterProduct;
