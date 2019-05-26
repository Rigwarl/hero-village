import { ActionType, StateType } from 'typesafe-actions';
import store from '../store';
import reducer from '../store/root-reducer';
import * as actions from '../store/root-actions';

declare module 'typesafe-actions' {
  export type TStore = StateType<typeof store>;

  export type TState = StateType<typeof reducer>;

  export type TAction = ActionType<typeof actions>;

  interface Types {
    RootAction: TAction;
  }
}
