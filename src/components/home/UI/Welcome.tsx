import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Welcome = () => {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography
          variant="h5"
          align="center"
          style={{ fontFamily: 'Permanent Marker' }}
        >
          Home Stock
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="body1" align="center">
          Liste suas compras de forma fácil e rápida.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
