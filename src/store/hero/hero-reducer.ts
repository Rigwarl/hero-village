import { createReducer } from 'typesafe-actions';
import * as actions from './hero-actions';

export type THeroMove = 'idle' | 'run' | 'attack';

const initialState = {
  move: 'idle' as THeroMove,
  moveTime: 0,
  level: 1,
  missedHealth: 0,
};

export default createReducer(initialState).handleAction(
  actions.move,
  (state, { payload }) => ({
    ...state,
    move: payload.move,
    moveTime: payload.time,
  })
);
