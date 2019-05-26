import { createReducer } from 'typesafe-actions';
import * as actions from './hero-actions';

const initialState = {
  move: 'idle' as THeroMove,
  moveStart: 0,
  level: 1,
  missedHealth: 0,
};

export default createReducer(initialState).handleAction(
  actions.heroMove,
  (state, action) => ({
    ...state,
    move: action.payload,
  })
);
