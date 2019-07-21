import React from 'react';
import { Card, Grid, Typography } from '@material-ui/core';

import { Product } from '../../../../state/products/types';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card elevation={4} style={{ padding: 32 }}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            {product.name}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductCard;
