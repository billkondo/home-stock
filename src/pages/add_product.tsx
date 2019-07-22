import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { routes } from '../config/routes';

import Create from '../components/management/products/Create';

const AddProduct = () => {
  return (
    <Grid container justify="center">
      <Grid item md={8} xs={10}>
        <Grid container direction="column" spacing={10}>
          <Grid item>
            <Typography variant="h3" style={{ fontFamily: 'Fredoka One' }}>
              Criando produto
            </Typography>
          </Grid>

          <Grid item>
            <Create />
          </Grid>

          <Grid item>
            <Link to={routes.management('products')}>
              Voltar para Gestão de Produtos
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddProduct;
