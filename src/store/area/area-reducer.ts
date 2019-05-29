import { createReducer } from 'typesafe-actions';
import { enemy } from '../root-actions';

const initialState = {
  wave: 1,
};

export default createReducer(initialState).handleAction(enemy.spawn, state => ({
  ...state,
  wave: state.wave + 1,
}));
