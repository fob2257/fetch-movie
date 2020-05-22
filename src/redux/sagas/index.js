import { all, call } from 'redux-saga/effects';

import demoSagas from './demoSagas';

export default function* () {
  yield all([demoSagas].map(saga => call(saga)));
}
