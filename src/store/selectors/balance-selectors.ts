import { TState } from 'typesafe-actions';
import { selectors } from '..';

const BALANCE = {
  COINS: 100,
  LVL_MULTIPLYER: 0.1,
};

export const getCoins = (state: TState) => state.balance.coins;
export const getMaxCoins = (state: TState) =>
  Math.floor(
    BALANCE.COINS *
      (1 + (selectors.hero.getLvl(state) - 1) * BALANCE.LVL_MULTIPLYER)
  );
