import React from 'react';
import { connect } from 'react-redux';

import NavbarUI from './UI/Main';
import { AppState } from 'state/store';
import { NavbarProvider } from './context';

type LoginState = {
  isLogged: boolean;
};

type Props = LoginState;

const Navbar: React.FC<Props> = ({ isLogged }) => {
  return (
    <NavbarProvider value={{ isLogged }}>
      <NavbarUI />
    </NavbarProvider>
  );
};

const mapStateToProps = (state: AppState): LoginState => {
  return {
    isLogged: state.auth.isLogged
  };
};

export default connect(mapStateToProps)(Navbar);
