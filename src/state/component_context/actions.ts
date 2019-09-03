import { StatusType } from 'models/status';
import { ErrorType } from 'models/error';

import {
  CHANGE_STATUS,
  ChangeStatusActionType,
  ComponentsKeysType,
  SetErrorsActionType,
  SET_ERRORS
} from './types';

export const changeStatusAction = ({
  component,
  status
}: {
  component: ComponentsKeysType;
  status: StatusType;
}): ChangeStatusActionType => {
  return {
    type: CHANGE_STATUS,
    component,
    status
  };
};

export const setErrorsAction = ({
  component,
  error
}: {
  component: ComponentsKeysType;
  error: ErrorType;
}): SetErrorsActionType => {
  return {
    type: SET_ERRORS,
    component,
    error
  };
};
