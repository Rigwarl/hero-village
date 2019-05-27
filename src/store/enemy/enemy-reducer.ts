import { createReducer } from 'typesafe-actions';
import * as actions from './enemy-actions';

export type TEnemyMove = 'idle' | 'dead';

const initialState = {
  move: 'idle' as TEnemyMove,
  moveTime: 0,
  missedHealth: 0,
};

export default createReducer(initialState)
  .handleAction(actions.move, (state, { payload }) => ({
    ...state,
    move: payload.move,
    moveTime: payload.time,
  }))
  .handleAction(actions.spawn, (_state, { payload }) => ({
    move: 'idle',
    missedHealth: 0,
    moveTime: payload.time,
  }))
  .handleAction(actions.damage, (state, { payload }) => ({
    ...state,
    missedHealth: state.missedHealth + payload.damage,
  }));
