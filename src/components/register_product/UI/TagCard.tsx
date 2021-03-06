import React, { useContext } from 'react';
import { Paper, Grid, Typography, IconButton, colors } from '@material-ui/core';
import { Close, Info } from '@material-ui/icons';

import { Tag } from 'models/tag';
import { RegisterProductContext } from '../context';

type Props = {
  tag: Tag;
};

const TagCard: React.FC<Props> = ({ tag }) => {
  const context = useContext(RegisterProductContext);

  const { removeTag } = context;

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
            {/* <IconButton>
              <Info style={{ color: colors.blue[900] }} />
            </IconButton> */}
          </Grid>

          <Grid item>
            <IconButton onClick={() => removeTag(tag)}>
              <Close style={{ color: colors.red[900] }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TagCard;
