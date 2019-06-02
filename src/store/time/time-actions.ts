import { createStandardAction } from 'typesafe-actions';

export const set = createStandardAction('time/SET')<number>();
