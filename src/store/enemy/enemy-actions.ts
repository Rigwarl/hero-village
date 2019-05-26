import { createStandardAction } from 'typesafe-actions';

export const move = createStandardAction('enemy/MOVE')<TEnemyMove, number>();
export const spawn = createStandardAction('enemy/SPAWN')<undefined, number>();
export const damage = createStandardAction('enemy/DAMAGE')<number>();
