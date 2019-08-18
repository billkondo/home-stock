import { SelectTagsState, SelectTagsActions } from './types';

export const reducer = (
  state: SelectTagsState,
  action: SelectTagsActions
): SelectTagsState => {
  switch (action.type) {
    case 'ADD_TAG':
      return {
        tags: state.tags.concat(action.tag)
      };

    case 'REMOVE_TAG':
      return {
        tags: state.tags.filter(tag => action.tag.name !== tag.name)
      };

    case 'CLEAR_TAGS':
      return {
        tags: []
      };

    default:
      return state;
  }
};

export const initialState: SelectTagsState = {
  tags: []
};
