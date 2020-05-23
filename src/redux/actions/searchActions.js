import * as types from '../constants';

export const searchMovie = payload => ({
  type: types.SEARCH_MOVIE,
  payload
});

export const searchMovieById = payload => ({
  type: types.SEARCH_MOVIE_BY_ID,
  payload
});
