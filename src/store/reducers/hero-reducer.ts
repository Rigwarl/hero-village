import { createReducer } from 'typesafe-actions';
import { actions } from '..';

export type THeroMove = 'idle' | 'run' | 'attack';

const initialState = {
  move: 'idle' as THeroMove,
  moveTime: 0,
  lvl: 1,
  exp: 0,
  missedHealth: 0,
};

export default createReducer(initialState)
  .handleAction(actions.hero.move, (state, { payload }) => ({
    ...state,
    move: payload.move,
    moveTime: payload.time,
  }))
  .handleAction(actions.hero.addExp, (state, { payload }) => ({
    ...state,
    exp: state.exp + payload.exp,
  }))
  .handleAction(actions.hero.lvlUp, state => ({
    ...state,
    lvl: state.lvl + 1,
  }));
