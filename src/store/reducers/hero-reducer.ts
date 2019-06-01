import { createReducer } from 'typesafe-actions';
import { actions } from '..';

export type THeroMove = 'idle' | 'run' | 'attack';

const initialState = {
  move: 'idle' as THeroMove,
  moveTime: 0,
  level: 1,
  missedHealth: 0,
};

export default createReducer(initialState).handleAction(
  actions.hero.move,
  (state, { payload }) => ({
    ...state,
    move: payload.move,
    moveTime: payload.time,
  })
);
