import React from 'react';
import { Card, Grid, Typography, InputBase } from '@material-ui/core';

import { Tag } from '../../../../../state/tags/types';

interface Props {
  tag: Tag;
}

const Front: React.FC<Props> = ({ tag }) => {
  return (
    <Card elevation={4} style={{ padding: 32, height: 250 }}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography variant="h6" style={{ fontWeight: 'bold' }} align="left">
            {tag.name}
          </Typography>
        </Grid>

        <Grid item>
          <InputBase
            value={tag.description}
            multiline
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Front;
