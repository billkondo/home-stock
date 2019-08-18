import React from 'react';
import { Paper, Grid, Typography, IconButton } from '@material-ui/core';
import { Close, Info } from '@material-ui/icons';

import { Tag } from 'models/tag';

type Props = {
  tag: Tag;
};

const TagCard: React.FC<Props> = ({ tag }) => {
  return (
    <Paper elevation={4}>
      <Grid container style={{ padding: 16 }} spacing={2}>
        <Grid item style={{ alignSelf: 'center' }}>
          <Typography variant="body1">{tag.name}</Typography>
        </Grid>

        <Grid
          item
          style={{ flex: 1 }}
          container
          justify="flex-end"
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <IconButton>
              <Info />
            </IconButton>
          </Grid>

          <Grid item>
            <IconButton>
              <Close />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TagCard;
