import { combineReducers } from 'redux';

import time from './time/time-reducer';
import hero from './hero/hero-reducer';
import enemy from './enemy/enemy-reducer';
import balance from './balance/balance-reducer';
import upgrades from './upgrades/upgrades-reducer';

export default combineReducers({ time, balance, hero, enemy, upgrades });
