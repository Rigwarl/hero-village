import { createStandardAction } from 'typesafe-actions';
import { THeroMove } from '../reducers/hero-reducer';

export const move = createStandardAction('hero/MOVE')<{
  move: THeroMove;
  time: number;
}>();

export const hit = createStandardAction('hero/HIT')<{
  damage: number;
}>();
