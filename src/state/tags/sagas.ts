import { takeLatest, delay, all, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  TAGS_CREATE_REQUEST,
  TagsCreateRequestAction,
  TAGS_CREATE,
  TagsCreateAction
} from './types';

import { routes } from '../../config/routes';

function* tagsCreateRequest(action: TagsCreateRequestAction) {
  try {
    if (action.tag.name.length === 0) throw new Error('Teste');

    yield put<TagsCreateAction>({
      type: TAGS_CREATE,
      tag: action.tag
    });

    yield put(push(routes.management('tags')));
  } catch (e) {
    throw e;
  }
}

function* watchTagsCreateRequest() {
  try {
    yield takeLatest(TAGS_CREATE_REQUEST, tagsCreateRequest);
  } catch (e) {
    throw e;
  }
}

export function* tagsSagas() {
  yield all([watchTagsCreateRequest()]);
}
