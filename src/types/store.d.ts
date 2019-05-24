import { ActionType } from 'typesafe-actions';
import * as actions from '../actions/root';
import reducer from '../reducers/root';

declare module 'typesafe-actions' {
  // export type Store = StateType<typeof import('./index').default>;

  export type RootState = StateType<typeof reducer>;

  export type RootAction = ActionType<typeof actions>;

  interface Types {
    RootAction: RootAction;
  }
}
