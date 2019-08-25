import React from 'react';
import { Grid } from '@material-ui/core';

import Welcome from './Welcome';
import SignUp from './SignUp';

const Main = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={6}>
        <Welcome />
      </Grid>

      <Grid item xs={12} md={6}>
        <SignUp />
      </Grid>
    </Grid>
  );
};

export default Main;
