import React, { useState } from 'react';
import Hero, { THeroState } from './Hero';
import Enemy from './Enemy';

const App = () => {
  const [state, setState] = useState<THeroState>('run');

  return (
    <>
      <Hero state={state} />
      <Enemy />
      <button onClick={() => setState(state === 'run' ? 'attack' : 'run')}>
        {state === 'run' ? 'attack' : 'run'}
      </button>
    </>
  );
};

export default App;
