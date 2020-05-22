import { combineReducers } from 'redux';

import searchReducers from './searchReducers';

const rootReducer = combineReducers({
  search: searchReducers
});

export default rootReducer;
