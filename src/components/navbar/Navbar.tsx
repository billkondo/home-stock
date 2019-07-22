import React from 'react';
import {
  AppBar,
  Grid,
  Typography,
  Toolbar,
  Button,
  colors
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { routes } from '../../config/routes';

const Navbar = () => {
  return (
    <AppBar position="relative" elevation={2}>
      <Toolbar>
        <Grid container alignItems="baseline">
          <Grid item>
            <Link
              to={routes.index}
              style={{ textDecoration: 'none', color: colors.grey[50] }}
            >
              <Typography
                variant="h6"
                style={{ fontFamily: 'Permanent Marker' }}
              >
                Home Stock
              </Typography>
            </Link>
          </Grid>

          <Grid item style={{ marginLeft: 80, flex: 1 }}>
            <Grid container alignItems="baseline" spacing={10}>
              <Grid item>
                <Link to={routes.purchases} style={{ textDecoration: 'none' }}>
                  <Button size="small" style={{ color: colors.grey[50] }}>
                    <Typography variant="body1">Compras</Typography>
                  </Button>
                </Link>
              </Grid>

              <Grid item>
                <Link
                  to={routes.management('products')}
                  style={{ textDecoration: 'none' }}
                >
                  <Button size="small" style={{ color: colors.grey[50] }}>
                    <Typography variant="body1">Gestão</Typography>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
