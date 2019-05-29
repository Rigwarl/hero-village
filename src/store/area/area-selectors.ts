import { TState } from 'typesafe-actions';

export const getWave = (state: TState) => state.area.wave;
