import React from 'react';
import { connect } from 'react-redux';
import { Card, ProgressBar, Row, Col } from 'react-bootstrap';
import { TState } from 'typesafe-actions';

import { selectors } from '../store';

const mapStateToProps = (state: TState) => ({
  level: selectors.hero.getLvl(state),
  exp: selectors.hero.getExp(state),
  lvlExp: selectors.hero.getLvlExp(state),
  damageMult: selectors.hero.getDamageMult(state),
  balanceMult: selectors.hero.getBalanceMult(state),
  damage: selectors.hero.getDamage(state),
  health: selectors.hero.getHealth(state),
});

type TProps = ReturnType<typeof mapStateToProps>;

const HeroTab = ({
  level,
  exp,
  lvlExp,
  damageMult,
  balanceMult,
  damage,
  health,
}: TProps) => (
  <>
    <Card bg="light" border="light">
      <Card.Body>
        <div className="h4 mb-3">Hero</div>
        <ProgressBar
          now={(exp / lvlExp) * 100}
          label={`${exp} / ${lvlExp}`}
          className="mb-3"
        />

        <Row>
          <Col xs={6} className="mb-3">
            Level: {level}
          </Col>
          <Col xs={6} className="mb-3">
            <div>x{damageMult} damage</div>
            <div>x{balanceMult} balance</div>
          </Col>
          <Col xs={6} className="mb-3">
            Damage:
          </Col>
          <Col xs={6} className="mb-3">
          {damage}
          </Col>
          <Col xs={6} className="mb-3">
            Health
          </Col>
          <Col xs={6} className="mb-3">
            {health}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </>
);

export default connect(mapStateToProps)(HeroTab);
