import { TState } from 'typesafe-actions';

import * as hero from './hero/hero-selectors';
import * as enemy from './enemy/enemy-selectors';
import * as balance from './balance/balance-selectors';

const getTime = (state: TState) => state.time;

export { getTime, balance, hero, enemy };
