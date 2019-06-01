import { TState } from 'typesafe-actions';
import { selectors } from '..';

const HERO = {
  HEALTH: 1,
  DAMAGE: 2,
  LVL_EXP: 20,
  MOVE_DURATION: 900,
};

const MULTIPLYERS = {
  LVL_EXP: 0.5,
  LVL_DAMAGE: 0.05,
};

export const getLvlExpMultiplyer = (state: TState) =>
  1 + MULTIPLYERS.LVL_EXP * (selectors.hero.getLvl(state) - 1);
export const getLvlDamageMultiplyer = (state: TState) =>
  1 + MULTIPLYERS.LVL_DAMAGE * (selectors.hero.getLvl(state) - 1);

export const getMaxHealth = () => HERO.HEALTH;
export const getHealth = (state: TState) =>
  getMaxHealth() - state.hero.missedHealth;

export const getLvl = (state: TState) => state.hero.lvl;
export const getDamage = (state: TState) =>
  HERO.DAMAGE * getLvlDamageMultiplyer(state);

export const getLvlExp = (state: TState) =>
  HERO.LVL_EXP * getLvlExpMultiplyer(state);
export const getExp = (state: TState) => state.hero.exp;

export const getMove = (state: TState) => state.hero.move;
export const getMoveTime = (state: TState) => state.hero.moveTime;
export const getMoveDuration = () => HERO.MOVE_DURATION;
