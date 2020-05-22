import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as types from '../constants';
import { doRequest } from '../../api';

export function* searchMovie() {
  yield takeLatest(types.SEARCH_MOVIE, function* ({ payload }) {
    try {
      const results = yield call(doRequest, {
        method: 'GET',
        params: { s: payload }
      });

      yield put({
        type: types.SEARCH_MOVIE_SUCCESS,
        payload: results['Search']
      });
    } catch (error) {
      yield put({ type: types.SEARCH_MOVIE_ERROR, payload: error });
    }
  });
}

export default function* () {
  yield all([searchMovie].map(saga => call(saga)));
}
