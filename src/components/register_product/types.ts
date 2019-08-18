import { Tag } from 'models/tag';

export type RegisterProductState = {
  name: string;
  description: string;
  isTagsMenuOpen: boolean;
  tags: Array<Tag>;
};

export type RegisterProductActions =
  | { type: 'CHANGE_TEXT'; value: string; name: string }
  | {
      type: 'TOGGLE_MENU';
      flag: boolean;
    }
  | { type: 'ADD_TAGS'; tags: Array<Tag> };
