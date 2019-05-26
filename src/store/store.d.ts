import { ActionType, StateType } from 'typesafe-actions';
import store from '../store';
import reducer from '../store/root-reducer';
import * as actions from '../store/root-actions';

declare module 'typesafe-actions' {
  export type Store = StateType<typeof store>;

  export type RootState = StateType<typeof reducer>;

  export type RootAction = ActionType<typeof actions>;

  interface Types {
    RootAction: RootAction;
  }
}
