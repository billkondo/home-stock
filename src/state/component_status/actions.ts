import { StatusType } from 'models/status';

import { CHANGE_STATUS, ChangeStatusActionType } from './types';

export const changeStatusAction = (
  component: string,
  status: StatusType
): ChangeStatusActionType => {
  return {
    type: CHANGE_STATUS,
    component,
    status
  };
};
