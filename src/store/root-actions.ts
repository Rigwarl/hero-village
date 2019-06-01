import { createStandardAction } from 'typesafe-actions';

import * as hero from './hero/hero-actions';
import * as enemy from './enemy/enemy-actions';
import * as balance from './balance/balance-actions';

const setTime = createStandardAction('time/SET')<number>();

export { setTime, balance, hero, enemy };
