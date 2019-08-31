import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
  SIGN_UP_REQUEST,
  SignUpRequestActionType,
  LoginActionType,
  LOGIN
} from './types';
import { validateSignUpForm } from 'models/sign_up';
import { api } from 'services/api/root';

function* processSignUpRequest(action: SignUpRequestActionType) {
  const { form } = action;
  console.log(form);
  try {
    yield validateSignUpForm(form);
    const res = yield call(api.signUp.registerUser);
    console.log(res);
    yield put<LoginActionType>({ type: LOGIN });
  } catch (e) {
    console.log(e);
  }
}

function* watchSignUpRequest() {
  try {
    yield takeLatest(SIGN_UP_REQUEST, processSignUpRequest);
  } catch (e) {
    throw e;
  }
}

export function* authSagas() {
  yield all([watchSignUpRequest()]);
}
