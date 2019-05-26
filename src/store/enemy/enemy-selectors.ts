import { RootState } from 'typesafe-actions';
import * as ENEMY from './enemy-constants';

export const getMaxHealth = () => ENEMY.HEALTH;

export const getHealth = (state: RootState) =>
  getMaxHealth() - state.enemy.missedHealth;

export const getMove = (state: RootState) => state.enemy.move;

export const getMoveDuration = () => ENEMY.MOVE_DURATION;
