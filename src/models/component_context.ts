import { StatusType } from 'models/status';
import { ErrorType } from 'models/error';

export type ComponentContextType = {
  status: StatusType;
  error?: ErrorType;
};
