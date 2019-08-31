import React from 'react';
import { Grid } from '@material-ui/core';

import SignIn from './SignIn';

const Main = () => {
  return (
    <Grid container justify="center">
      <Grid item md={6} xs={10}>
        <SignIn />
      </Grid>
    </Grid>
  );
};

export default Main;
