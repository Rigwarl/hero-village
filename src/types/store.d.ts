import { ActionType, StateType } from 'typesafe-actions';
import store from '../store';
import action from '../store/root-actions';
import reducer from '../store/root-reducer';

declare module 'typesafe-actions' {
  export type Store = StateType<typeof store>;

  export type RootState = StateType<typeof reducer>;

  export type RootAction = ActionType<typeof action>;

  interface Types {
    RootAction: RootAction;
  }
}
