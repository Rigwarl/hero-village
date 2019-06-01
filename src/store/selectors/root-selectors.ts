import { TState } from 'typesafe-actions';

import * as hero from './hero-selectors';
import * as enemy from './enemy-selectors';

const getTime = (state: TState) => state.time;

export { getTime, hero, enemy };
