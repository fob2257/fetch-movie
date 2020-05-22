import * as types from '../constants';

export const searchMovie = payload => ({
  type: types.SEARCH_MOVIE,
  payload
});
