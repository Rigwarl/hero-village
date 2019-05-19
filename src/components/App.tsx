import React, { useState } from 'react';
import Hero, { THeroState } from './Hero';

const App = () => {
  const [state, setState] = useState<THeroState>('run');

  return (
    <>
      <Hero state={state} />
      <button onClick={() => setState(state === 'run' ? 'attack' : 'run')}>
        {state === 'run' ? 'attack' : 'run'}
      </button>
    </>
  );
};

export default App;
