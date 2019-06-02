import { createReducer } from 'typesafe-actions';
import { actions } from '..';

const initialState = {
  damage: 0,
};

export type TUpgrades = keyof typeof initialState;

export default createReducer(initialState).handleAction(
  actions.upgrades.upDamage,
  state => ({
    ...state,
    damage: state.damage + 1,
  })
);
