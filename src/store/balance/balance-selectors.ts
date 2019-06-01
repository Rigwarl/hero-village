import { TState } from 'typesafe-actions';
import { selectors } from '..';

const BALANCE = { MAX_COINS: 100 };
const MULTIPLYERS = { LVL: 0.05 };

export const getLvlMultiplyer = (state: TState) =>
  1 + (selectors.hero.getLvl(state) - 1) * MULTIPLYERS.LVL;

export const getCoins = (state: TState) => state.balance.coins;
export const getMaxCoins = (state: TState) =>
  Math.floor(BALANCE.MAX_COINS * getLvlMultiplyer(state));
