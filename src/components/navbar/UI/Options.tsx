import React from 'react';
import { Grid, Button, Typography, colors } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { routes } from 'config/routes';

const Options = () => {
  return (
    <Grid container alignItems="baseline" spacing={10}>
      <Grid item>
        <Link to={routes.purchases} style={{ textDecoration: 'none' }}>
          <Button size="small" style={{ color: colors.grey[50] }}>
            <Typography variant="body1" style={{ fontFamily: 'Fredoka One' }}>
              Compras
            </Typography>
          </Button>
        </Link>
      </Grid>

      <Grid item>
        <Link
          to={routes.management('products')}
          style={{ textDecoration: 'none' }}
        >
          <Button size="small" style={{ color: colors.grey[50] }}>
            <Typography variant="body1" style={{ fontFamily: 'Fredoka One' }}>
              Gestão
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Options;
