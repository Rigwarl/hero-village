import { TState } from 'typesafe-actions';

const UPGRADES = {
  DAMAGE_COST: 5,
};

const MULTS = {
  DAMAGE: 0.1,
  DAMAGE_COST: 2,
};

export const getDamageLvl = (state: TState) => state.upgrades.damage;
export const getDamageCostMult = (state: TState) =>
  1 + MULTS.DAMAGE_COST * getDamageLvl(state);
export const getDamageCost = (state: TState) =>
  UPGRADES.DAMAGE_COST * getDamageCostMult(state);
export const getDamageMult = (state: TState) =>
  1 + MULTS.DAMAGE * getDamageLvl(state);
