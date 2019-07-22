import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { routes } from '../config/routes';
import Create from '../components/management/tags/create/Create';

const AddTag = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={10} md={8}>
        <Grid container direction="column" spacing={10}>
          <Grid item>
            <Typography variant="h3" style={{ fontFamily: 'Fredoka One' }}>
              Criando categoria
            </Typography>

            <Typography variant="body1" style={{ marginTop: 16 }}>
              Categorias são uma ótima maneira para agrupar seus produtos
            </Typography>
          </Grid>

          <Grid item>
            <Create />
          </Grid>

          <Grid item>
            <Link to={routes.management('tags')}>
              Voltar para Gestão de Categorias
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddTag;
