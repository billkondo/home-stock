import React, { useReducer } from 'react';
import { Grid } from '@material-ui/core';

import { HomeProvider } from './context';
import { reducer, initialState } from './state';
import { ChangeTextAction } from './actions';

import HomeUI from './UI/Main';

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { form } = state;

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(ChangeTextAction(e.target.name, e.target.value));
  };

  const createUser = () => {
    console.log(form);
  };

  return (
    <HomeProvider
      value={{
        form,
        changeText: onChangeText,
        createUser
      }}
    >
      <HomeUI />
    </HomeProvider>
  );
};

export default Home;
