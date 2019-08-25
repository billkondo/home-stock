import React from 'react';
import { Typography, colors, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { routes } from 'config/routes';

const Logo = () => {
  return (
    <Button size="medium">
      <Link
        to={routes.index}
        style={{ textDecoration: 'none', color: colors.grey[50] }}
      >
        <Typography variant="h5" style={{ fontFamily: 'Permanent Marker' }}>
          Home Stock
        </Typography>
      </Link>
    </Button>
  );
};

export default Logo;
