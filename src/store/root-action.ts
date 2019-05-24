import { createStandardAction } from 'typesafe-actions';

const add = createStandardAction('ADD')();
const remove = createStandardAction('REMOVE')();

export default {
  add,
  remove,
};
