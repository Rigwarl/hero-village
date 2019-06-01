import { createStandardAction } from 'typesafe-actions';

import * as hero from './hero-actions';
import * as enemy from './enemy-actions';
import * as balance from './balance-actions';

const setTime = createStandardAction('time/SET')<number>();

export { setTime, balance, hero, enemy };
