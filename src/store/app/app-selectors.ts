import { TState } from 'typesafe-actions';

export const getTime = (state: TState) => state.app.time;
