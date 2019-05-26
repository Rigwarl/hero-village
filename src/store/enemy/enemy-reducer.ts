import { createReducer } from 'typesafe-actions';
import * as actions from './enemy-actions';

const initialState = {
  move: 'idle' as TEnemyMove,
  moveTime: 0,
  missedHealth: 0,
};

export default createReducer(initialState)
  .handleAction(actions.move, (state, action) => ({
    ...state,
    move: action.payload,
    moveTime: action.meta,
  }))
  .handleAction(actions.spawn, (_state, action) => ({
    move: 'idle',
    missedHealth: 0,
    moveTime: action.meta,
  }))
  .handleAction(actions.damage, (state, action) => ({
    ...state,
    missedHealth: state.missedHealth + action.payload,
  }));
