import { createReducer } from 'typesafe-actions';
import { setTime } from '../actions/root-actions';
import { combineReducers } from 'redux';

import hero from './hero-reducer';
import enemy from './enemy-reducer';
import balance from './balance-reducer';

const time = createReducer(0).handleAction(
  setTime,
  (_state, { payload }) => payload
);

export default combineReducers({ time, balance, hero, enemy });
