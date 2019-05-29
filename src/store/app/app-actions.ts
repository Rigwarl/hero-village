import { createStandardAction } from 'typesafe-actions';

export const setTime = createStandardAction('app/TIME')<{ time: number }>();
