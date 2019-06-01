import { createReducer } from 'typesafe-actions';
import { actions } from '..';

export type TEnemyMove = 'idle' | 'dead';

const initialState = {
  wave: 1,
  move: 'idle' as TEnemyMove,
  moveTime: 0,
  missedHealth: 0,
};

export default createReducer(initialState)
  .handleAction(actions.enemy.move, (state, { payload }) => ({
    ...state,
    move: payload.move,
    moveTime: payload.time,
  }))
  .handleAction(actions.enemy.spawn, (state, { payload }) => ({
    wave: state.wave + 1,
    move: 'idle',
    missedHealth: 0,
    moveTime: payload.time,
  }))
  .handleAction(actions.hero.hit, (state, { payload }) => ({
    ...state,
    missedHealth: state.missedHealth + payload.damage,
  }));
