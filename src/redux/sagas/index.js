import { all, call } from 'redux-saga/effects';

import searchSagas from './searchSagas';

export default function* () {
  yield all([searchSagas].map(saga => call(saga)));
}
