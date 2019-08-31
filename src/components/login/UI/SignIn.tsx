import React, { useContext } from 'react';
import {
  Card,
  Grid,
  Typography,
  TextField,
  Button,
  colors
} from '@material-ui/core';

import { LoginContext } from '../context';

const SignIn = () => {
  const context = useContext(LoginContext);

  const { form, changeText, createSession } = context;

  return (
    <Card elevation={2}>
      <Grid container direction="column" style={{ padding: 32 }} spacing={4}>
        <Grid item>
          <Typography variant="h6" align="center">
            Login
          </Typography>
        </Grid>

        <Grid item>
          <TextField
            variant="outlined"
            fullWidth
            label="Email"
            value={form.email}
            onChange={changeText}
            name="email"
          />
        </Grid>

        <Grid item>
          <TextField
            variant="outlined"
            fullWidth
            label="Senha"
            type="password"
            value={form.password}
            onChange={changeText}
            name="password"
          />
        </Grid>

        <Grid item>
          <Button
            fullWidth
            variant="contained"
            style={{
              backgroundColor: colors.green[400],
              color: colors.grey[50]
            }}
            onClick={createSession}
          >
            Entrar
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SignIn;
