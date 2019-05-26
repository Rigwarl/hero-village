import { createStandardAction } from 'typesafe-actions';
import { THeroMove } from './hero-reducer';

export const move = createStandardAction('hero/MOVE')<THeroMove, number>();
