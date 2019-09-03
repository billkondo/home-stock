import { takeLatest, all, call, put } from 'redux-saga/effects';

import { SIGN_UP_REQUEST, SignUpRequestActionType } from './types';
import { loginAction } from './actions';
import { validateSignUpForm } from 'models/sign_up';
import { api } from 'services/api/root';
import {
  changeStatusAction,
  setErrorsAction
} from 'state/component_context/actions';

function* processSignUpRequest(action: SignUpRequestActionType) {
  const { form } = action;

  try {
    // Validate sign up form
    const validation = validateSignUpForm(form);

    if (validation.status === 'ERROR') {
      // Emit signal to show that form has errors
      yield put(
        setErrorsAction({
          component: 'signUp',
          error: {
            type: 'VALIDATION',
            messages: validation.err
          }
        })
      );

      return;
    }

    // Emit signal to show loading spin
    yield put(
      changeStatusAction({
        component: 'signUp',
        status: 'LOADING'
      })
    );

    const res = yield call(api.signUp.registerUser);

    yield put(
      changeStatusAction({
        component: 'signUp',
        status: 'OK'
      })
    );

    if (res.status === 'OK') {
      // Login user in app
      yield put(loginAction());
    } else {
      // Handle error in API call
    }
  } catch (e) {
    // Log error
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
