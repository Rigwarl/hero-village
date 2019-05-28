import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { TBoundThunkAction } from 'typesafe-actions';

import frameAction from '../store/frame-action';
import Hero from './Hero';
import Enemy from './Enemy';
import HeroHealthBar from './HeroHealthBar';
import EnemyHealthBar from './EnemyHealthBar';

type TProps = {
  frameAction: TBoundThunkAction<typeof frameAction>;
};

const mapDispatchToProps = { frameAction };

const App = ({ frameAction }: TProps) => {
  useEffect(() => {
    let rafId: number;

    const frameHandler = () => {
      frameAction();
      rafId = requestAnimationFrame(frameHandler);
    };
    rafId = requestAnimationFrame(frameHandler);

    return () => cancelAnimationFrame(rafId);
  });

  return (
    <>
      <div>
        <HeroHealthBar />
        <EnemyHealthBar />
      </div>

      <div>
        <Hero />
        <Enemy />
      </div>
    </>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(App);
