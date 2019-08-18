import React, { useReducer } from 'react';

import { SelectTagsProvider } from './context';
import { SelectTagsProps } from './types';
import Main from './UI/Main';
import { reducer, initialState } from './state';
import { Tag } from 'models/tag';

const SelectTags: React.FC<SelectTagsProps> = ({ addTags, close, isOpen }) => {
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
    addTags(state.tags);
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
        close
      }}
    >
      <Main />
    </SelectTagsProvider>
  );
};

export default SelectTags;
