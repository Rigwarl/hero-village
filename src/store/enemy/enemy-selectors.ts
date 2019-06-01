import { TState } from 'typesafe-actions';

const ENEMY = {
  HEALTH: 5,
  EXP: 5,
  COINS: 2,
  WAVE_MULTIPLYER: 0.2,
  MOVE_DURATION: 1500,
};

export const getWave = (state: TState) => state.enemy.wave;

export const getExp = (_state: TState) => ENEMY.EXP;
export const getCoins = (_state: TState) => ENEMY.COINS;

export const getMaxHealth = (state: TState) =>
  ENEMY.HEALTH * (1 + ENEMY.WAVE_MULTIPLYER * (state.enemy.wave - 1));
export const getHealth = (state: TState) =>
  Math.max(0, getMaxHealth(state) - state.enemy.missedHealth);

export const getMove = (state: TState) => state.enemy.move;
export const getMoveTime = (state: TState) => state.enemy.moveTime;
export const getMoveDuration = () => ENEMY.MOVE_DURATION;