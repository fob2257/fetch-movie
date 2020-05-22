import * as types from '../constants';

export const getDemoRequest = payload => ({
  type: types.GET_DEMO_REQUEST,
  payload
});
