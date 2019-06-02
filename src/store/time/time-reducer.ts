import { createReducer } from 'typesafe-actions';
import { set } from './time-actions';

export default createReducer(0).handleAction(
  set,
  (_state, { payload }) => payload
);
