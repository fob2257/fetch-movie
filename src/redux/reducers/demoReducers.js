import * as types from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DEMO_REQUEST: {
      return [...state];
    }

    case types.GET_DEMO_SUCCESS: {
      return [...state, ...action.payload];
    }

    default: {
      return state;
    }
  }
};
