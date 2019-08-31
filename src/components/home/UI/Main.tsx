import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';

import Welcome from './Welcome';
import SignUp from './SignUp';
import { HomeContext } from '../context';

const Main = () => {
  const context = useContext(HomeContext);

  const { isLogged } = context;

  return (
    <Grid container spacing={5}>
      {isLogged ? null : (
        <React.Fragment>
          <Grid item xs={12} md={6}>
            <Welcome />
          </Grid>

          <Grid item xs={12} md={6}>
            <SignUp />
          </Grid>
        </React.Fragment>
      )}
    </Grid>
  );
};

export default Main;
