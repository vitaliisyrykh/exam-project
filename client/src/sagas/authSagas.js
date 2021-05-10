import { put } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import history from '../browserHistory';
import * as Api from '../api/http';
import { controller } from '../api/ws/socketController';

function createAuthSaga (method) {
  return function * (action) {
    try {
      const {
        data: {
          data: { user },
        },
      } = yield method(action.data);
      controller.subscribe(user.id);
      history.replace('/');
      yield put({ type: ACTION.AUTH_ACTION_SUCCESS, user });
    } catch (err) {
      yield put({ type: ACTION.AUTH_ACTION_ERROR, error: err.response });
    }
  };
}

export const refreshSaga = createAuthSaga(Api.auth.refresh);
export const loginSaga = createAuthSaga(Api.auth.login);
export const registerSaga = createAuthSaga(Api.auth.signUp);
