import { StatusType } from 'models/status';
import { ErrorType } from 'models/error';
import { ComponentContextType } from 'models/component_context';

export type ComponentsKeysType = 'signUp';

export const CHANGE_STATUS = 'COMPONENT_STATUS_CHANGE_STATUS';

export type ChangeStatusActionType = {
  type: typeof CHANGE_STATUS;
  component: ComponentsKeysType;
  status: StatusType;
};

export const SET_ERRORS = 'COMPONENT_STATUS_SET_ERRORS';

export type SetErrorsActionType = {
  type: typeof SET_ERRORS;
  component: ComponentsKeysType;
  error: ErrorType;
};

export type ComponentsContextActionsType =
  | ChangeStatusActionType
  | SetErrorsActionType;

export type ComponentsContextStateType = {
  signUp: ComponentContextType;
};
