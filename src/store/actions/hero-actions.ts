import { createStandardAction } from 'typesafe-actions';
import { THeroMove } from '../reducers/hero-reducer';

export const move = createStandardAction('hero/MOVE')<{
  move: THeroMove;
  time: number;
}>();

export const hit = createStandardAction('hero/HIT')<{ damage: number }>();

export const addExp = createStandardAction('hero/EXP')<{ exp: number }>();

export const addLvl = createStandardAction('hero/LVL')();
