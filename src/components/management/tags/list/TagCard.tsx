import React from 'react';
import { Card, Grid, Typography, InputBase } from '@material-ui/core';

import { Tag } from '../../../../state/tags/types';

type Props = {
  tag: Tag;
};

const TagCard: React.FC<Props> = ({ tag }) => {
  return (
    <Card style={{ padding: 32 }} elevation={4}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            {tag.name}
          </Typography>
        </Grid>

        <Grid item>
          <InputBase
            value={tag.description}
            multiline
            inputProps={{ readOnly: true }}
            fullWidth
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default TagCard;
