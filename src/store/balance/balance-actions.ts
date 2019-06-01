import { createStandardAction } from 'typesafe-actions';

export const changeCoins = createStandardAction('balance/COINS')<number>();
