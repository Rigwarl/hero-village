import React, { useState } from 'react';
import Hero, { THeroState } from './Hero';

const App = () => {
  const [state, setState] = useState<THeroState>('run');

  return (
    <>
      <Hero
        state={state}
        onClick={() => {
          setState(state === 'run' ? 'attack' : 'run');
        }}
      />
    </>
  );
};

export default App;
