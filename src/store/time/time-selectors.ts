import { TState } from 'typesafe-actions';

export const get = (state: TState) => state.time;
