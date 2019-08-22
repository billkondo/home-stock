import { isEqual } from 'lodash';

import { RegisterProductActions, RegisterProductState } from './types';

export const reducer = (
  state: RegisterProductState,
  action: RegisterProductActions
): RegisterProductState => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        ...state,
        [action.name]: action.value
      };

    case 'TOGGLE_MENU':
      return {
        ...state,
        isTagsMenuOpen: action.flag
      };

    case 'ADD_TAGS':
      return {
        ...state,
        tags: state.tags.concat(...action.tags)
      };

    case 'REMOVE_TAG':
      return {
        ...state,
        tags: state.tags.filter(tag => !isEqual(tag, action.tag))
      };

    default:
      return state;
  }
};

export const initialState: RegisterProductState = {
  name: '',
  description: '',
  isTagsMenuOpen: false,
  tags: []
};
