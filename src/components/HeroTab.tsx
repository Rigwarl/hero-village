import React from 'react';
import { connect } from 'react-redux';
import { Card, ProgressBar, Row, Col } from 'react-bootstrap';
import { TState } from 'typesafe-actions';

import { selectors } from '../store';

const mapStateToProps = (state: TState) => ({
  level: selectors.hero.getLvl(state),
  exp: selectors.hero.getExp(state),
  lvlExp: selectors.hero.getLvlExp(state),
  lvlMultiplyer: selectors.hero.getLvlMultiplyer(state),
});

type TProps = ReturnType<typeof mapStateToProps>;

const HeroTab = ({ level, exp, lvlExp, lvlMultiplyer }: TProps) => (
  <>
    <Card bg="light" border="light">
      <Card.Body>
        <div className="h4 mb-3">Hero</div>
        <ProgressBar
          now={(exp / lvlExp) * 100}
          label={`${exp} / ${lvlExp}`}
          className="mb-2"
        />

        <Row>
          <Col xs={6} className="mb-2">
            Hero level: {level}
          </Col>
          <Col xs={6} className="mb-2">
            x{lvlMultiplyer} dmg / x{lvlMultiplyer} hp
          </Col>
          <Col xs={6} className="mb-2">
            Attack upgrade: 0
          </Col>
          <Col xs={6} className="mb-2">
            100% attack
          </Col>
          <Col xs={6} className="mb-2">
            Defense upgrade: 0
          </Col>
          <Col xs={6} className="mb-2">
            100% health
          </Col>
          <Col xs={12}>
            <hr />
          </Col>
          <Col xs={6} className="mb-2">
            <b>Total</b>
          </Col>
          <Col xs={6}>
            <b>100% attack / 100% health</b>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </>
);

export default connect(mapStateToProps)(HeroTab);
