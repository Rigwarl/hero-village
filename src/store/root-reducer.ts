import { createReducer } from 'typesafe-actions';
import { setTime } from './root-actions';
import { combineReducers } from 'redux';

import hero from './hero/hero-reducer';
import enemy from './enemy/enemy-reducer';
import balance from './balance/balance-reducer';

const time = createReducer(0).handleAction(
  setTime,
  (_state, { payload }) => payload
);

export default combineReducers({ time, balance, hero, enemy });
