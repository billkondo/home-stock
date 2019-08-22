import { Tag } from 'models/tag';

export type SelectTagsProps = {
  isOpen: boolean;
  close: () => void;
  addTags: (tags: Array<Tag>) => void;
  registeredTags: Array<Tag>;
};

export type SelectTagsState = {
  selectedTags: Array<Tag>;
};

export type SelectTagsActions =
  | {
      type: 'ADD_TAG';
      tag: Tag;
    }
  | {
      type: 'REMOVE_TAG';
      tag: Tag;
    }
  | {
      type: 'CLEAR_TAGS';
    };
