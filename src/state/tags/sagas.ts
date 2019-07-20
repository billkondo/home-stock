import { takeEvery, delay, all, put } from 'redux-saga/effects';

import {
  TAGS_CREATE_REQUEST,
  TagsCreateRequestAction,
  TAGS_CREATE,
  TagsCreateAction
} from './types';

function* tagsCreateRequest(action: TagsCreateRequestAction) {
  console.log(action);
  console.log('tags create request');
  try {
    yield put<TagsCreateAction>({
      type: TAGS_CREATE,
      tag: action.tag
    });
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
