import React from 'react';
import { Button, colors } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { routes } from 'config/routes';

const Profile = () => {
  return (
    <Link to={routes.login} style={{ textDecoration: 'none' }}>
      <Button variant="outlined" style={{ color: colors.grey[50] }}>
        Entrar
      </Button>
    </Link>
  );
};

export default Profile;
