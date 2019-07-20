import { TAGS_CREATE, TagsStateType, TagsActionType } from './types';

const initialState: TagsStateType = {
  tagsList: [
    {
      name: 'FRUTAS',
      description: 'Exemplo de frutas: abacaxi, maçã, pera, manga ...'
    },
    {
      name: 'HIGIENE',
      description:
        'Exemplo de produtos de higiene: pasta de dente, escova de dente, fio dental ...'
    }
  ]
};

export const tagsReducer = (
  state = initialState,
  action: TagsActionType
): TagsStateType => {
  switch (action.type) {
    case TAGS_CREATE:
      return {
        ...state,
        tagsList: state.tagsList.concat(action.tag)
      };

    default:
      return state;
  }
};
