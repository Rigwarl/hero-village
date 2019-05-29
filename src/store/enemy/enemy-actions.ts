import { createStandardAction } from 'typesafe-actions';
import { TEnemyMove } from './enemy-reducer';

export const move = createStandardAction('enemy/MOVE')<{
  move: TEnemyMove;
  time: number;
}>();

export const spawn = createStandardAction('enemy/SPAWN')<{ time: number }>();

export const damage = createStandardAction('enemy/DAMAGE')<{
  damage: number;
}>();
