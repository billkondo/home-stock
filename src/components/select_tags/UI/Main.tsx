import React, { useContext } from 'react';
import {
  Dialog,
  Grid,
  Typography,
  IconButton,
  Button
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

import { SelectTagsContext } from '../context';
import TagsList from './TagsList';

const Main = () => {
  const context = useContext(SelectTagsContext);

  const { isOpen, clearTags, submit, close } = context;

  return (
    <Dialog
      open={isOpen}
      onClose={close}
      maxWidth={'md'}
      fullWidth
      scroll="body"
    >
      <Grid
        container
        direction="column"
        style={{ padding: 16, paddingLeft: 32, paddingRight: 32 }}
      >
        <Grid item container alignItems="center">
          <Grid item>
            <Typography variant="h6" style={{ fontFamily: 'Fredoka One' }}>
              Selecione uma ou mais categorias
            </Typography>
          </Grid>

          <Grid item style={{ flex: 1 }} container justify="flex-end">
            <IconButton onClick={close}>
              <Close />
            </IconButton>
          </Grid>
        </Grid>

        <Grid
          item
          container
          justify="center"
          style={{ marginTop: 32, marginBottom: 32 }}
        >
          <TagsList />
        </Grid>

        <Grid item>
          <Grid container justify="flex-end">
            <Grid item style={{ marginRight: 32 }}>
              <Button onClick={clearTags}>Limpar</Button>
            </Grid>

            <Grid item>
              <Button onClick={submit}>Adicionar</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default Main;
