import React, { useContext } from 'react';
import { Button, colors, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AccountCircle } from '@material-ui/icons';

import { routes } from 'config/routes';
import { NavbarContext } from '../context';

const Profile = () => {
  const context = useContext(NavbarContext);

  const { isLogged } = context;

  return (
    <React.Fragment>
      {isLogged ? (
        <IconButton style={{ color: colors.grey[50] }}>
          <AccountCircle />
        </IconButton>
      ) : (
        <Link to={routes.login} style={{ textDecoration: 'none' }}>
          <Button variant="outlined" style={{ color: colors.grey[50] }}>
            Entrar
          </Button>
        </Link>
      )}
    </React.Fragment>
  );
};

export default Profile;
