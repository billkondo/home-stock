import React, { useContext } from 'react';
import {
  Grid,
  Card,
  Typography,
  TextField,
  Button,
  colors
} from '@material-ui/core';

import { HomeContext } from '../context';

const SignUp = () => {
  const context = useContext(HomeContext);

  const { form, changeText, createUser } = context;

  return (
    <Card elevation={2}>
      <Grid container direction="column" style={{ padding: 32 }} spacing={4}>
        <Grid item>
          <Typography variant="h6" align="center">
            Cadastre-se
          </Typography>
        </Grid>

        <Grid item>
          <TextField
            variant="outlined"
            fullWidth
            label="Nome"
            value={form.name}
            onChange={changeText}
            name="name"
          />
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
          <TextField
            variant="outlined"
            fullWidth
            label="Confirme Senha"
            value={form.passwordConfirmation}
            onChange={changeText}
            name="passwordConfirmation"
            type="password"
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
            onClick={createUser}
          >
            Criar Conta
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SignUp;
