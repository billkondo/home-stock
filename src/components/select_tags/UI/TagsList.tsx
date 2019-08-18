import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { findIndex, isEqual } from 'lodash';

import { Tag } from 'models/tag';
import TagCard from './TagCard';
import { SelectTagsContext } from '../context';

const TagsList = () => {
  const context = useContext(SelectTagsContext);

  const { state, addTag, removeTag } = context;
  const { tags } = state;

  const tagsList = [
    {
      name: 'A',
      description: 'Um nome muito bom'
    },
    {
      name: 'B',
      description: 'Um nome muito ruim'
    },
    {
      name: 'C',
      description: 'automate process'
    },
    {
      name: 'D',
      description: 'Um nome muito bom'
    },
    {
      name: 'E',
      description: 'Um nome muito ruim'
    },
    {
      name: 'F',
      description: 'automate process'
    }
  ];

  const includes = (tags: Array<Tag>, tag: Tag) => {
    return findIndex(tags, o => isEqual(tag, o)) !== -1;
  };

  return (
    <Grid container spacing={4} style={{ margin: 16 }}>
      {tagsList.map(tag => {
        return (
          <Grid item key={tag.name} xs={12} md={6}>
            <TagCard
              tag={tag}
              selected={includes(tags, tag)}
              addTag={addTag}
              removeTag={removeTag}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TagsList;
