import {
  ComponentsContextStateType,
  ComponentsContextActionsType,
  CHANGE_STATUS,
  SET_ERRORS
} from './types';

export const componentContextReducer = (
  state = initialState,
  action: ComponentsContextActionsType
): ComponentsContextStateType => {
  switch (action.type) {
    case CHANGE_STATUS:
      return {
        ...state,
        [action.component]: {
          status: action.status
        }
      };

    case SET_ERRORS:
      return {
        ...state,
        [action.component]: {
          status: 'ERROR',
          error: action.error
        }
      };

    default:
      return state;
  }
};

const initialState: ComponentsContextStateType = {
  signUp: {
    status: 'OK'
  }
};
