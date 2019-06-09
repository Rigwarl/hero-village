import { createStandardAction } from 'typesafe-actions';

export const buyDamage = createStandardAction('upgrades/DAMAGE')<{
  coins: number;
}>();
