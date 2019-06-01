import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { TBoundThunkAction } from 'typesafe-actions';

import frameAction from '../store/frame-action';
import Hero from './Hero';
import Enemy from './Enemy';
import HeroHealthBar from './HeroHealthBar';
import EnemyHealthBar from './EnemyHealthBar';
import WaveIndicator from './WaveIndicator';
import HeroTab from './HeroTab';
import UpgradesTab from './UpgradesTab';
import Balance from './Balance';

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
    <Container className="mt-3">
      <Row>
        <Col xs={4}>
          <HeroHealthBar />
        </Col>
        <Col xs={4} className="text-center">
          <WaveIndicator />
        </Col>
        <Col xs={4}>
          <EnemyHealthBar />
        </Col>
        <Col xs={6} className="text-center">
          <Hero />
        </Col>
        <Col xs={6} className="text-center">
          <Enemy />
        </Col>
        <Col md={12}>
          <Balance />
        </Col>
        <Col md={6}>
          <HeroTab />
        </Col>
        <Col md={6}>
          <UpgradesTab />
        </Col>
      </Row>
    </Container>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(App);
