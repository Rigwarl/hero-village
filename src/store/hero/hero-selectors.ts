import { TState } from 'typesafe-actions';

const HERO = {
  HEALTH: 1,
  DAMAGE: 2,
  LVL_EXP: 20,
  MOVE_DURATION: 900,
};

const MULTS = {
  LVL_EXP: 0.5,
  DAMAGE: 0.05,
  BALANCE: 0.05,
};

export const getLvlExpMult = (state: TState) =>
  1 + MULTS.LVL_EXP * (getLvl(state) - 1);
export const getDamageMult = (state: TState) =>
  1 + MULTS.DAMAGE * (getLvl(state) - 1);
export const getBalanceMult = (state: TState) =>
  1 + (getLvl(state) - 1) * MULTS.BALANCE;

export const getHealth = (state: TState) =>
  getMaxHealth() - state.hero.missedHealth;
export const getMaxHealth = () => HERO.HEALTH;

export const getLvl = (state: TState) => state.hero.lvl;
export const getDamage = (state: TState) => HERO.DAMAGE * getDamageMult(state);

export const getExp = (state: TState) => state.hero.exp;
export const getLvlExp = (state: TState) => HERO.LVL_EXP * getLvlExpMult(state);

export const getMove = (state: TState) => state.hero.move;
export const getMoveTime = (state: TState) => state.hero.moveTime;
export const getMoveDuration = () => HERO.MOVE_DURATION;
