import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import { AppState } from '../../../../state/store';
import { Product } from '../../../../state/products/types';

import ProductCard from './ProductCard';

interface StateFromProps {
  products: Product[];
}

const List: React.FC<StateFromProps> = ({ products }) => {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Typography variant="h6" style={{ fontFamily: 'Fredoka One' }}>
          Produtos cadastrados
        </Typography>
      </Grid>

      <Grid item>
        <Grid container spacing={5}>
          {products.map(product => {
            return (
              <Grid item key={product.name} xs={12} md={6}>
                <ProductCard product={product} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    products: state.products.products
  };
};

export default connect(mapStateToProps)(List);
