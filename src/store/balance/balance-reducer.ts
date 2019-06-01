import { createReducer } from 'typesafe-actions';
import { changeCoins } from './balance-actions';

const initialBalanceState = { coins: 0 };

export default createReducer(initialBalanceState).handleAction(
  changeCoins,
  (state, { payload }) => ({ coins: state.coins + payload })
);
