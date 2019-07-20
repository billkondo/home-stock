import React from 'react';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';

import { AppState } from '../../../../state/store';
import { Tag } from '../../../../state/tags/types';
import TagCard from './TagCard';

interface StateFromProps {
  tagsList: Tag[];
}

const List: React.FC<StateFromProps> = ({ tagsList }) => {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Typography variant="h6" style={{ fontFamily: 'Fredoka One' }}>
          Categorias Cadastradas
        </Typography>
      </Grid>

      <Grid item>
        <Grid container spacing={5}>
          {tagsList.map(tag => {
            console.log(tag);
            return (
              <Grid item key={tag.name} xs={12} md={6}>
                <TagCard tag={tag} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: AppState): StateFromProps => {
  return {
    tagsList: state.tags.tagsList
  };
};

export default connect(mapStateToProps)(List);
