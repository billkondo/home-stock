import React, { useContext } from 'react';
import { AppBar, Toolbar, Grid, colors } from '@material-ui/core';

import { NavbarContext } from '../context';

import Logo from './Logo';
import Options from './Options';
import Profile from './Profile';

const Main = () => {
  const context = useContext(NavbarContext);

  const { isLogged } = context;

  return (
    <AppBar
      position="relative"
      elevation={10}
      style={{ backgroundColor: colors.red[400] }}
    >
      <Toolbar>
        <Grid container justify="center">
          <Grid item xs={12} md={10}>
            <Grid container alignItems="baseline">
              <Grid item>
                <Logo />
              </Grid>

              <Grid item style={{ marginLeft: 80, flex: 1 }}>
                {isLogged && <Options />}
              </Grid>

              <Grid item>
                <Profile />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Main;
