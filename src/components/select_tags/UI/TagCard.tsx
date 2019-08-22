import React from 'react';
import {
  Grid,
  InputBase,
  Box,
  Typography,
  IconButton,
  colors,
  Card
} from '@material-ui/core';
import { Add, Close } from '@material-ui/icons';

import { Tag } from 'models/tag';

type Props = {
  tag: Tag;
  selected: boolean;
  addTag: (tag: Tag) => void;
  removeTag: (tag: Tag) => void;
};

const TagCard: React.FC<Props> = ({ tag, selected, addTag, removeTag }) => {
  return (
    <Box position="relative">
      <Card elevation={4}>
        <Grid container direction="column" style={{ height: 200 }}>
          <Grid item style={{ padding: 16 }}>
            <InputBase
              value={tag.description ? tag.description : ''}
              multiline
              fullWidth
              inputProps={{
                readOnly: true
              }}
            />
          </Grid>

          <Box position="absolute" bottom={0} width="inherit">
            <Grid
              item
              container
              alignItems="center"
              style={{
                backgroundColor: selected
                  ? colors.green[900]
                  : colors.blueGrey[900],
                padding: 8,
                opacity: 0.7,
                borderRadius: 4
              }}
            >
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: colors.grey[50], fontFamily: 'Fredoka One' }}
                >
                  {tag.name}
                </Typography>
              </Grid>

              <Grid item style={{ flex: 1 }} container justify="flex-end">
                {selected ? (
                  <IconButton
                    style={{ color: colors.grey[50] }}
                    onClick={() => removeTag(tag)}
                  >
                    <Close />
                  </IconButton>
                ) : (
                  <IconButton
                    style={{ color: colors.grey[50] }}
                    onClick={() => addTag(tag)}
                  >
                    <Add />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Card>
    </Box>
  );
};

export default TagCard;
