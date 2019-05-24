import { createStandardAction } from 'typesafe-actions';

export const add = createStandardAction('ADD')();
export const remove = createStandardAction('REMOVE')();
