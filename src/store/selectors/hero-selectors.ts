import { TState } from 'typesafe-actions';

const HERO = {
  HEALTH: 1,
  DAMAGE: 2,
  MOVE_DURATION: 900,
};

export const getMaxHealth = () => HERO.HEALTH;
export const getHealth = (state: TState) =>
  getMaxHealth() - state.hero.missedHealth;
export const getDamage = () => HERO.DAMAGE;
export const getMove = (state: TState) => state.hero.move;
export const getMoveTime = (state: TState) => state.hero.moveTime;
export const getMoveDuration = () => HERO.MOVE_DURATION;
