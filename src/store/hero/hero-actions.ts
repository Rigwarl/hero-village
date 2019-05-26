import { createStandardAction } from 'typesafe-actions';

export const heroMove = createStandardAction('hero/MOVE')<THeroMove>();
export const heroHit = createStandardAction('hero/HIT')<number>();
