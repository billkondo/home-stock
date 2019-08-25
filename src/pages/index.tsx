import React from 'react';
import { Grid } from '@material-ui/core';

import Home from 'components/home/Home';

const Index = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={10} md={8}>
        <Home />
      </Grid>
    </Grid>
  );
};

export default Index;
