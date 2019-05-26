import React, { useReducer, useEffect } from 'react';
import Hero from './Hero';
import Enemy from './Enemy';
import HealthBar from './HealthBar';

const tps = 12;

const initialState = {
  tick: 0,
  heroState: 'idle' as THeroMove,
  heroStateStart: 0,
  heroAttackTime: 10,
  heroAttackDamage: 2,
  heroHealth: 10,
  heroMaxHealth: 10,
  enemyState: 'idle' as TEnemyMove,
  enemyStateStart: 0,
  enemyRespawnTime: 20,
  enemyHealth: 10,
  enemyMaxHealth: 10,
};

type TState = typeof initialState;

type TAction = {
  type: 'tick' | 'idle' | 'run' | 'attack' | 'hit' | 'die' | 'spawn';
  data?: any;
};

const reducer: React.Reducer<TState, TAction> = (state, action) => {
  action.type !== 'tick' && console.log(action.type);
  switch (action.type) {
    case 'tick':
      return { ...state, tick: state.tick + 1 };
    case 'idle':
      return { ...state, heroState: 'idle', heroStateStart: state.tick };
    case 'run':
      return { ...state, heroState: 'run', heroStateStart: state.tick };
    case 'attack':
      return { ...state, heroState: 'attack', heroStateStart: state.tick };
    case 'hit':
      return { ...state, enemyHealth: state.enemyHealth - action.data };
    case 'die':
      return { ...state, enemyState: 'dead', enemyStateStart: state.tick };
    case 'spawn':
      return {
        ...state,
        enemyState: 'idle',
        enemyStateStart: state.tick,
        enemyHealth: state.enemyMaxHealth,
      };
    default:
      throw new Error(`wrong action type ${action.type}`);
  }
};

const tick = (state: TState, dispatch: React.Dispatch<TAction>) => {
  if (state.heroState === 'idle') {
    if (state.enemyState === 'dead') {
      dispatch({ type: 'run' });
    } else {
      dispatch({ type: 'attack' });
    }
  }

  if (state.heroState === 'run') {
    if (
      state.enemyState === 'idle' &&
      state.enemyStateStart + 8 <= state.tick
    ) {
      dispatch({ type: 'attack' });
    }
  }

  if (state.heroState === 'attack') {
    const attackLength = state.tick - state.heroStateStart;
    const attackHit = Math.floor(state.heroAttackTime / 2) === attackLength;

    if (attackHit) {
      dispatch({ type: 'hit', data: state.heroAttackDamage });
    }

    if (attackLength >= state.heroAttackTime) {
      dispatch({ type: 'idle' });
    }
  }

  if (state.enemyState === 'idle' && state.enemyHealth <= 0) {
    dispatch({ type: 'die' });
  }

  if (
    state.enemyState === 'dead' &&
    state.enemyStateStart + state.enemyRespawnTime <= state.tick
  ) {
    dispatch({ type: 'spawn' });
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
        <Enemy health={state.enemyHealth} state={state.enemyState} />
      </div>
    </>
  );
};

export default App;
