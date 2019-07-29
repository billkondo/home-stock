import React from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import AddTagMenu from './AddTagMenu';

type Props = {
  isTagsMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

const Tags: React.FC<Props> = ({ isTagsMenuOpen, openMenu, closeMenu }) => {
  return (
    <Grid container direction="column">
      <AddTagMenu isOpen={isTagsMenuOpen} close={closeMenu} />

      <Grid item container spacing={4} alignItems="center">
        <Grid item>
          <Typography variant="body1">Categorias</Typography>
        </Grid>

        <Grid item>
          <IconButton onClick={openMenu}>
            <Add />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Tags;
