import { createStandardAction } from 'typesafe-actions';

export const move = createStandardAction('hero/MOVE')<THeroMove>();
export const hit = createStandardAction('hero/HIT')<number>();
