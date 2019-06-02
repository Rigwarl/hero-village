import { TState } from 'typesafe-actions';
import { selectors } from '..';

const BALANCE = { MAX_COINS: 20 };

export const getCoins = (state: TState) => state.balance.coins;
export const getMaxCoins = (state: TState) =>
  Math.floor(BALANCE.MAX_COINS * selectors.hero.getBalanceMult(state));
