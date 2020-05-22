import * as types from '../constants';

const initialState = { isLoading: false, results: [] };

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

    default: {
      return state;
    }
  }
};
