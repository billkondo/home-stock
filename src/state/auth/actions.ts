import { LoginActionType, LOGIN } from './types';

export const loginAction = (): LoginActionType => {
  return {
    type: LOGIN
  };
};
