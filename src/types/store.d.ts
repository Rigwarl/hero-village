import { ActionType, StateType } from 'typesafe-actions';
import { ThunkAction } from 'redux-thunk';

import store from '../store';
import reducer from '../store/root-reducer';
import * as actions from '../store/root-actions';

declare module 'typesafe-actions' {
  export type TStore = StateType<typeof store>;

  export type TState = StateType<typeof reducer>;

  export type TAction = ActionType<typeof actions>;

  export type TThunkAction<R> = ThunkAction<R, TState, undefined, TAction>;

  interface Types {
    RootAction: TAction;
  }
}
