import React, { useContext } from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import SelectTags from 'components/select_tags/SelectTags';
import TagCard from './TagCard';

import { RegisterProductContext } from '../context';

const Tags = () => {
  const context = useContext(RegisterProductContext);

  const { toggleMenu, state, addTags } = context;
  const { tags, isTagsMenuOpen } = state;

  const openMenu = () => toggleMenu(true);
  const closeMenu = () => toggleMenu(false);

  return (
    <Grid container direction="column">
      <SelectTags close={closeMenu} isOpen={isTagsMenuOpen} addTags={addTags} />

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

      <Grid
        item
        container
        spacing={6}
        style={{
          paddingTop: 32
        }}
      >
        {tags.map(tag => {
          return (
            <Grid item key={tag.name} xs={12} md={6}>
              <TagCard tag={tag} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Tags;
