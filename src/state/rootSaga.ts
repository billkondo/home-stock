import { fork } from 'redux-saga/effects';

import { tagsSagas } from './tags/sagas';
import { authSagas } from './auth/sagas';

export function* rootSaga() {
  yield fork(tagsSagas);
  yield fork(authSagas);
}
