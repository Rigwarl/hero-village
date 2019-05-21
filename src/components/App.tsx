import React, { useReducer, useEffect } from 'react';
import Hero, { THeroState } from './Hero';
import Enemy from './Enemy';
import HealthBar from './HealthBar';

const tps = 12;

const initialState = {
  tick: 0,
  heroState: 'attack' as THeroState,
  heroStateStart: 0,
  heroAttackDuration: 10,
  heroAttackDamage: 2,
  heroHealth: 10,
  heroMaxHealth: 10,
  enemyHealth: 10,
  enemyMaxHealth: 10,
};

type TState = typeof initialState;

type TAction = {
  type: 'tick' | 'run' | 'attack' | 'hit';
  data?: any;
};

const reducer: React.Reducer<TState, TAction> = (state, action) => {
  switch (action.type) {
    case 'tick':
      return { ...state, tick: state.tick + 1 };
    case 'run':
      return { ...state, heroState: 'run', heroStateStart: state.tick };
    case 'attack':
      return { ...state, heroState: 'attack', heroStateStart: state.tick };
    case 'hit':
      return { ...state, enemyHealth: state.enemyHealth - action.data };
    default:
      throw new Error(`wrong action type ${action.type}`);
  }
};

const tick = (state: TState, dispatch: React.Dispatch<TAction>) => {
  if (state.heroState === 'run') {
    if (state.enemyHealth > 0) {
      dispatch({ type: 'attack' });
    }
  }

  if (state.heroState === 'attack') {
    const attackLength = state.tick - state.heroStateStart;
    const hitTime = Math.floor(state.heroAttackDuration / 2) === attackLength;

    if (hitTime) {
      dispatch({ type: 'hit', data: state.heroAttackDamage });
    }

    if (attackLength >= state.heroAttackDuration) {
      dispatch({ type: 'run' });
    }
  }

  dispatch({ type: 'tick' });
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const intervalId = setInterval(() => tick(state, dispatch), 1000 / tps);
    return () => clearInterval(intervalId);
  });

  return (
    <>
      <div>
        <HealthBar max={state.heroMaxHealth} current={state.heroHealth} />
        <HealthBar max={state.enemyMaxHealth} current={state.enemyHealth} />
      </div>

      <div>
        <Hero state={state.heroState} />
        <Enemy health={state.enemyHealth} />
      </div>
    </>
  );
};

export default App;
