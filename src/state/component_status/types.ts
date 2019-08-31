import { StatusType } from 'models/status';

export const CHANGE_STATUS = 'COMPONENT_STATUS_CHANGE_STATUS';

export type ChangeStatusActionType = {
  type: typeof CHANGE_STATUS;
  component: string;
  status: StatusType;
};

export type ComponentsStatusActionsType = ChangeStatusActionType;
