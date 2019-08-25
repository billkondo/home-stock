import React from 'react';
import { Grid } from '@material-ui/core';

import Login from 'components/login/Login';

const LoginPage = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={10}>
        <Login />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
