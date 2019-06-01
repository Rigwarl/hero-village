import { createStandardAction } from 'typesafe-actions';

export const changeCoins = createStandardAction('balance/COINS')<{
  coins: number;
}>();
