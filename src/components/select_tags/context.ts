import React from 'react';

import { SelectTagsState } from './types';
import { Tag } from 'models/tag';

interface SelectTagsContextInterface {
  state: SelectTagsState;
  addTag: (tag: Tag) => void;
  removeTag: (tag: Tag) => void;
  clearTags: () => void;
  submit: () => void;
  isOpen: boolean;
  close: () => void;
  tagsOptions: Array<Tag>;
  registeredTags: Array<Tag>;
}

export const SelectTagsContext = React.createContext(
  {} as SelectTagsContextInterface
);

export const SelectTagsProvider = SelectTagsContext.Provider;
