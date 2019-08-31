import { ChangeTextActionType, CHANGE_TEXT } from './types';

export const ChangeTextAction = (
  field: string,
  text: string
): ChangeTextActionType => ({
  field,
  text,
  type: CHANGE_TEXT
});
