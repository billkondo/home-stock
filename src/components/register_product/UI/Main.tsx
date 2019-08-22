import React, { useContext } from 'react';
import { Paper, Box, Grid, TextField, Button } from '@material-ui/core';

import { RegisterProductContext } from '../context';
import Tags from './Tags';

const Main = () => {
  const context = useContext(RegisterProductContext);

  const { state, handleChange } = context;

  const onSubmit = () => {
    console.log(state);
  };

  return (
    <Paper elevation={8}>
      <Box padding={8}>
        <Grid container direction="column" spacing={6}>
          <Grid item>
            <TextField
              label="Nome"
              fullWidth
              value={state.name}
              name="name"
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item>
            <TextField
              label="Descrição"
              fullWidth
              multiline
              value={state.description}
              name="description"
              onChange={handleChange}
            />
          </Grid>

          <Grid item>
            <Tags />
          </Grid>

          <Grid item container justify="flex-end">
            <Button variant="outlined" onClick={onSubmit}>
              Criar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Main;
