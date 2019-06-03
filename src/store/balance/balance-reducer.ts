import { createReducer } from 'typesafe-actions';
import { actions } from '..';

const initialBalanceState = { coins: 0 };

export default createReducer(initialBalanceState)
  .handleAction(actions.balance.changeCoins, (state, { payload }) => ({
    coins: state.coins + payload,
  }))
  .handleAction(actions.upgrades.buyDamage, (state, { payload }) => ({
    ...state,
    coins: state.coins - payload.coins,
  }));
