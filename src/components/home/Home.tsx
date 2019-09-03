import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { HomeProvider } from './context';
import { reducer, initialState } from './state';
import { ChangeTextAction } from './actions';

import HomeUI from './UI/Main';

import { signUpRequestAction } from 'state/auth/actions';
import { SignUpFormType } from 'models/sign_up';
import { AppState } from 'state/store';
import { ComponentContextType } from 'models/component_context';

type Props = {
  emitSignUpRequest: (form: SignUpFormType) => void;
  isLogged: boolean;
  SignUpContext: ComponentContextType;
};

const Home: React.FC<Props> = ({
  emitSignUpRequest,
  isLogged,
  SignUpContext
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { form } = state;

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(ChangeTextAction(e.target.name, e.target.value));
  };

  const createUser = () => {
    emitSignUpRequest(form);
  };

  return (
    <HomeProvider
      value={{
        form,
        changeText: onChangeText,
        createUser,
        isLogged,
        SignUpContext
      }}
    >
      <HomeUI />
    </HomeProvider>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    isLogged: state.auth.isLogged,
    SignUpContext: state.componentContext.signUp
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    emitSignUpRequest: (form: SignUpFormType) =>
      dispatch(signUpRequestAction(form))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
