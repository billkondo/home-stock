import { takeEvery, delay, all, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  TAGS_CREATE_REQUEST,
  TagsCreateRequestAction,
  TAGS_CREATE,
  TagsCreateAction
} from './types';

import { routes } from '../../config/routes';

function* tagsCreateRequest(action: TagsCreateRequestAction) {
  console.log(action);
  console.log('tags create request');
  try {
    yield put<TagsCreateAction>({
      type: TAGS_CREATE,
      tag: action.tag
    });

    yield put(push(routes.management('tags')));
  } catch (e) {
    console.log(e);
  }
}

function* watchTagsCreateRequest() {
  console.log('WATCH ');
  yield takeEvery(TAGS_CREATE_REQUEST, tagsCreateRequest);
}

export function* tagsSagas() {
  yield all([watchTagsCreateRequest()]);
}
