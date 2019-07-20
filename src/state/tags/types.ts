export interface Tag {
  name: string;
  description?: string;
}

export const TAGS_CREATE = 'TAGS_CREATE';

export type TagsCreateAction = {
  type: typeof TAGS_CREATE;
  tag: Tag;
};

export const TAGS_CREATE_REQUEST = 'TAGS_CREATE_REQUEST';

export type TagsCreateRequestAction = {
  type: typeof TAGS_CREATE_REQUEST;
  tag: Tag;
};

export type TagsActionType = TagsCreateAction | TagsCreateRequestAction;

export interface TagsStateType {
  tagsList: Tag[];
}
