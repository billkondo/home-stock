import { fork } from 'redux-saga/effects';
import { tagsSagas } from './tags/sagas';

export function* rootSaga() {
  yield fork(tagsSagas);
}
