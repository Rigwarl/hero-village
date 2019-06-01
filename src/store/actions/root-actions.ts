import { createStandardAction } from 'typesafe-actions';

import * as hero from './hero-actions';
import * as enemy from './enemy-actions';

const setTime = createStandardAction('time/SET')<number>();

export { setTime, hero, enemy };
