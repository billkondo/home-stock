import React, { useContext } from 'react';
import { Grid, Card, Typography, Button, colors } from '@material-ui/core';

import { HomeContext } from '../context';
import { ErrorType } from 'models/error';
import { SignUpFormLabels } from 'models/sign_up';
import TextField from 'components/custom_textfield/CustomTextfield';

const SignUp = () => {
  const context = useContext(HomeContext);

  const { form, changeText, createUser, SignUpContext } = context;

  const { status, error } = SignUpContext;

  const isWrong = (field: string, error?: ErrorType): boolean =>
    !!error && error.type === 'VALIDATION' && !!error.messages[field];

  const extractErrorMessage = (field: string, error?: ErrorType): string =>
    !!error && error.type === 'VALIDATION' ? error.messages[field] : '';

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
            changeText={changeText}
            label={'Nome'}
            name={SignUpFormLabels.name}
            value={form.name}
            error={isWrong(SignUpFormLabels.name, error)}
            errorMessage={extractErrorMessage(SignUpFormLabels.name, error)}
          />
        </Grid>

        <Grid item>
          <TextField
            changeText={changeText}
            label={'Email'}
            name={SignUpFormLabels.email}
            value={form.email}
            error={isWrong(SignUpFormLabels.email, error)}
            errorMessage={extractErrorMessage(SignUpFormLabels.email, error)}
          />
        </Grid>

        <Grid item>
          <TextField
            label={'Senha'}
            value={form.password}
            changeText={changeText}
            name={SignUpFormLabels.password}
            error={isWrong(SignUpFormLabels.password, error)}
            errorMessage={extractErrorMessage(SignUpFormLabels.password, error)}
          />
        </Grid>

        <Grid item>
          <TextField
            label={'Confirme Senha'}
            value={form.passwordConfirmation}
            changeText={changeText}
            name={SignUpFormLabels.passwordConfirmation}
            error={isWrong(SignUpFormLabels.passwordConfirmation, error)}
            errorMessage={extractErrorMessage(
              SignUpFormLabels.passwordConfirmation,
              error
            )}
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
