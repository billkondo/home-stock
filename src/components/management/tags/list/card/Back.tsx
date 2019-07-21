import React from 'react';
import { Card, Grid, IconButton, Tooltip } from '@material-ui/core';
import { Edit, Delete, Favorite } from '@material-ui/icons';

const Back = () => {
  return (
    <Card elevation={4} style={{ padding: 32, height: 250 }}>
      <Grid container alignItems="center" spacing={7} style={{ height: 250 }}>
        <Grid item xs={4} container justify="center">
          <Tooltip title="Favoritar" placement="top">
            <IconButton>
              <Favorite />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={4} container justify="center">
          <Tooltip title="Editar" placement="top">
            <IconButton>
              <Edit />
            </IconButton>
          </Tooltip>
        </Grid>

        <Grid item xs={4} container justify="center">
          <Tooltip title="Deletar" placement="top">
            <IconButton>
              <Delete />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Back;
