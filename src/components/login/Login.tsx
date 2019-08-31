import React, { useReducer } from 'react';
import { connect } from 'react-redux';

import LoginUI from './UI/Main';

import { LoginProvider } from './context';
import { initialState, reducer } from './state';
import { AppState } from 'state/store';
import { ChangeTextAction } from './actions';

type Props = {
  isLogged: boolean;
};

const Login: React.FC<Props> = ({ isLogged }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { form } = state;

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(ChangeTextAction(e.target.name, e.target.value));
  };

  const createSession = () => {
    console.log(form);
  };

  return (
    <LoginProvider
      value={{
        form,
        isLogged,
        changeText: onChangeText,
        createSession
      }}
    >
      <LoginUI />
    </LoginProvider>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    isLogged: state.auth.isLogged
  };
};

export default connect(mapStateToProps)(Login);
