import { createReducer } from 'typesafe-actions';
import action from './root-action';

export default createReducer(0)
  .handleAction(action.add, state => state + 1)
  .handleAction(action.remove, state => state - 1);
