import { TState } from 'typesafe-actions';
import * as ENEMY from './enemy-constants';

export const getMaxHealth = () => ENEMY.HEALTH;

export const getHealth = (state: TState) =>
  getMaxHealth() - state.enemy.missedHealth;

export const getMove = (state: TState) => state.enemy.move;

export const getMoveTime = (state: TState) => state.enemy.moveTime;

export const getMoveDuration = () => ENEMY.MOVE_DURATION;
