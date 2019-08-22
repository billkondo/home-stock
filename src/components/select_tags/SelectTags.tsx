import React, { useReducer, useEffect } from 'react';
import { connect } from 'react-redux';

import { SelectTagsProvider } from './context';
import { SelectTagsProps } from './types';
import Main from './UI/Main';
import { reducer, initialState } from './state';
import { Tag } from 'models/tag';
import { AppState } from 'state/store';

type StoreProps = {
  tags: Array<Tag>;
};

const SelectTags: React.FC<SelectTagsProps & StoreProps> = ({
  addTags,
  close,
  isOpen,
  tags,
  registeredTags
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTag = (tag: Tag) => {
    dispatch({
      type: 'ADD_TAG',
      tag
    });
  };

  const removeTag = (tag: Tag) => {
    dispatch({
      type: 'REMOVE_TAG',
      tag
    });
  };

  const clearTags = () => {
    dispatch({
      type: 'CLEAR_TAGS'
    });
  };

  const submit = () => {
    addTags(state.selectedTags);
    clearTags();
    close();
  };

  return (
    <SelectTagsProvider
      value={{
        state,
        addTag,
        clearTags,
        removeTag,
        submit,
        isOpen,
        close,
        tagsOptions: tags,
        registeredTags
      }}
    >
      <Main />
    </SelectTagsProvider>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    tags: state.tags.tagsList
  };
};

export default connect(mapStateToProps)(SelectTags);
