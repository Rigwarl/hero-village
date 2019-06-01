import { TState } from 'typesafe-actions';

const HERO = {
  HEALTH: 1,
  DAMAGE: 2,
  LVL_EXP: 20,
  LVL_MULTIPLYER: 0.1,
  MOVE_DURATION: 900,
};

export const getMaxHealth = () => HERO.HEALTH;
export const getHealth = (state: TState) =>
  getMaxHealth() - state.hero.missedHealth;

export const getLvl = (state: TState) => state.hero.lvl;
export const getLvlMultiplyer = (state: TState) =>
  1 + HERO.LVL_MULTIPLYER * (getLvl(state) - 1);
export const getDamage = (state: TState) =>
  HERO.DAMAGE * getLvlMultiplyer(state);

export const getLvlExp = (state: TState) =>
  HERO.LVL_EXP * (1 + HERO.LVL_MULTIPLYER * (getLvl(state) - 1));
export const getExp = (state: TState) => state.hero.exp;

export const getMove = (state: TState) => state.hero.move;
export const getMoveTime = (state: TState) => state.hero.moveTime;
export const getMoveDuration = () => HERO.MOVE_DURATION;
