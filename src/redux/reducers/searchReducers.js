import * as types from '../constants';

const initialState = { isLoading: false, results: [], result: null };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SEARCH_MOVIE: {
      return { ...state, isLoading: true };
    }

    case types.SEARCH_MOVIE_SUCCESS: {
      return { ...state, isLoading: false, results: payload };
    }

    case types.SEARCH_MOVIE_ERROR: {
      return { ...state, isLoading: false, results: [] };
    }

    case types.SEARCH_MOVIE_BY_ID: {
      return { ...state, isLoading: true };
    }

    case types.SEARCH_MOVIE_BY_ID_SUCCESS: {
      return { ...state, isLoading: false, result: payload };
    }

    case types.SEARCH_MOVIE_BY_ID_ERROR: {
      return { ...state, isLoading: false, result: null };
    }

    default: {
      return state;
    }
  }
};
