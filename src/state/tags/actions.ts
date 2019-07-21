import { TAGS_CREATE, TagsActionType, Tag, TAGS_CREATE_REQUEST } from './types';

export const tags_create = (tag: Tag): TagsActionType => {
  return {
    type: TAGS_CREATE,
    tag
  };
};

export const tags_create_request = (tag: Tag): TagsActionType => {
  return {
    type: TAGS_CREATE_REQUEST,
    tag
  };
};
