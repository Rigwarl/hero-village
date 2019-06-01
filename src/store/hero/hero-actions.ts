import { createStandardAction } from 'typesafe-actions';
import { THeroMove } from './hero-reducer';

export const move = createStandardAction('hero/MOVE')<{
  move: THeroMove;
  time: number;
}>();

export const hit = createStandardAction('hero/HIT')<{ damage: number }>();

export const changeExp = createStandardAction('hero/EXP')<{ exp: number }>();

export const addLvl = createStandardAction('hero/LVL')();
