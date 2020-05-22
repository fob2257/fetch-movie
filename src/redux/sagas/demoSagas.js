import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as types from '../constants';
import { getDemo } from '../../api';

export function* getDemoRequest() {
  yield takeLatest(types.GET_DEMO_REQUEST, function* ({ payload }) {
    try {
      const demoData = yield call(getDemo, payload);

      yield put({ type: types.GET_DEMO_SUCCESS, payload: demoData });
    } catch (error) {
      yield put({ type: types.SEARCH_MEDIA_ERROR, payload: error });
    }
  });
}

export default function* () {
  yield all([getDemoRequest].map(saga => call(saga)));
}
