import { createReducer } from 'typesafe-actions';
import { setTime } from './app-actions';

const initialState = {
  time: 0,
};

export default createReducer(initialState).handleAction(
  setTime,
  (state, { payload }) => ({ ...state, time: payload.time })
);
