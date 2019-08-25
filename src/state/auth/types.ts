export const LOGIN = 'AUTH_LOGIN';

export type LoginActionType = {
  type: typeof LOGIN;
};

export type AuthActionType = LoginActionType;

export type AuthStateType = {
  isLogged: boolean;
};
