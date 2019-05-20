import React, { useState } from 'react';
import Hero, { THeroState } from './Hero';
import Enemy from './Enemy';
import HealthBar from './HealthBar';

const App = () => {
  const [state, setState] = useState<THeroState>('run');

  return (
    <>
      <div>
        <HealthBar max={10} current={10} />
        <HealthBar max={10} current={5} />
      </div>

      <div>
        <Hero state={state} />
        <Enemy />
      </div>

      <button onClick={() => setState(state === 'run' ? 'attack' : 'run')}>
        {state === 'run' ? 'attack' : 'run'}
      </button>
    </>
  );
};

export default App;
