import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as types from '../constants';
import { doRequest } from '../../api';

export function* searchMovie() {
  yield takeLatest(types.SEARCH_MOVIE, function* ({ payload }) {
    try {
      const res = yield call(doRequest, {
        method: 'GET',
        params: { s: payload }
      });

      yield put({
        type: types.SEARCH_MOVIE_SUCCESS,
        payload: res['Search']
      });
    } catch (error) {
      yield put({ type: types.SEARCH_MOVIE_ERROR, payload: error });
    }
  });
}

export function* searchMovieById() {
  yield takeLatest(types.SEARCH_MOVIE_BY_ID, function* ({ payload }) {
    try {
      const res = yield call(doRequest, {
        method: 'GET',
        params: { i: payload }
      });

      yield put({
        type: types.SEARCH_MOVIE_BY_ID_SUCCESS,
        payload: res
      });
    } catch (error) {
      yield put({ type: types.SEARCH_MOVIE_BY_ID_ERROR, payload: error });
    }
  });
}

export default function* () {
  yield all([searchMovie, searchMovieById].map(saga => call(saga)));
}
