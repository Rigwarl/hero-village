import { createReducer } from 'typesafe-actions';
import * as actions from '../actions/root';

export default createReducer(0)
  .handleAction(actions.add, state => state + 1)
  .handleAction(actions.remove, state => state - 1);
