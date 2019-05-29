import { TState } from 'typesafe-actions';
import * as ENEMY from './enemy-constants';

export const getMaxHealth = (state: TState) =>
  ENEMY.HEALTH * (1 + 0.2 * state.area.wave);

export const getHealth = (state: TState) =>
  Math.max(0, getMaxHealth(state) - state.enemy.missedHealth);

export const getMove = (state: TState) => state.enemy.move;

export const getMoveTime = (state: TState) => state.enemy.moveTime;

export const getMoveDuration = () => ENEMY.MOVE_DURATION;
