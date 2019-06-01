import { createStandardAction } from 'typesafe-actions';
import { TEnemyMove } from '../reducers/enemy-reducer';

export const move = createStandardAction('enemy/MOVE')<{
  move: TEnemyMove;
  time: number;
}>();

export const spawn = createStandardAction('enemy/SPAWN')<{ time: number }>();
