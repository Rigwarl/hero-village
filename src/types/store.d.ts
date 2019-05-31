import { ActionType, StateType } from 'typesafe-actions';
import { ThunkAction } from 'redux-thunk';

import store, { reducer, actions } from '../store';

declare module 'typesafe-actions' {
  export type TStore = StateType<typeof store>;

  export type TState = StateType<typeof reducer>;

  export type TAction = ActionType<typeof actions>;

  export type TThunkAction<R> = ThunkAction<R, TState, undefined, TAction>;

  export type TBoundThunkAction<
    T extends (...args: any[]) => TThunkAction<ReturnType<ReturnType<T>>>
  > = (...args: Parameters<T>) => ReturnType<ReturnType<T>>;

  interface Types {
    RootAction: TAction;
  }
}
