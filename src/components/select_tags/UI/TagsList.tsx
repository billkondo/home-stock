import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { findIndex, isEqual } from 'lodash';

import { Tag } from 'models/tag';
import TagCard from './TagCard';
import { SelectTagsContext } from '../context';

const TagsList = () => {
  const context = useContext(SelectTagsContext);

  const { state, addTag, removeTag, tagsOptions, registeredTags } = context;
  const { selectedTags } = state;

  const includes = (tags: Array<Tag>, tag: Tag) => {
    return findIndex(tags, o => isEqual(tag, o)) !== -1;
  };

  const options = tagsOptions.filter(tag => !includes(registeredTags, tag));

  return (
    <Grid container spacing={4} style={{ margin: 16 }}>
      {options.map(tag => {
        return (
          <Grid item key={tag.name} xs={12} md={6}>
            <TagCard
              tag={tag}
              selected={includes(selectedTags, tag)}
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
