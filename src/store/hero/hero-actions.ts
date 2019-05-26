import { createStandardAction } from 'typesafe-actions';

export const move = createStandardAction('hero/MOVE')<THeroMove, number>();
