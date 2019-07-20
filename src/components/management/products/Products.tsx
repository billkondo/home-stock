import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { routes } from '../../../config/routes';

const Products = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Link to={routes.add_product} style={{ textDecoration: 'none' }}>
          <Button variant="outlined">Criar Produto</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Products;
