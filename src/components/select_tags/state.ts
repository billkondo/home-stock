import { SelectTagsState, SelectTagsActions } from './types';

export const reducer = (
  state: SelectTagsState,
  action: SelectTagsActions
): SelectTagsState => {
  switch (action.type) {
    case 'ADD_TAG':
      return {
        ...state,
        selectedTags: state.selectedTags.concat(action.tag)
      };

    case 'REMOVE_TAG':
      return {
        ...state,
        selectedTags: state.selectedTags.filter(
          tag => action.tag.name !== tag.name
        )
      };

    case 'CLEAR_TAGS':
      return {
        ...state,
        selectedTags: []
      };

    default:
      return state;
  }
};

export const initialState: SelectTagsState = {
  selectedTags: []
};
