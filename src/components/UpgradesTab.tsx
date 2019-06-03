import React from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { TState } from 'typesafe-actions';

import { selectors, actions } from '../store';

const mapStateToProps = (state: TState) => ({
  coins: selectors.balance.getCoins(state),
  _damageLvl: selectors.upgrades.getDamageLvl(state),
  damageMult: selectors.upgrades.getDamageMult(state),
  damageCost: selectors.upgrades.getDamageCost(state),
});

const mapDispatchToProps = {
  buyDamage: actions.upgrades.buyDamage,
};

type TProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const UpgradesTab = ({
  coins,
  _damageLvl,
  damageMult,
  damageCost,
  buyDamage,
}: TProps) => (
  <>
    <Card bg="light" border="light">
      <Card.Body>
        <div className="h4 mb-3">Upgrades</div>

        <Row className="align-items-center">
          <Col xs={9} className="mb-3">
            <Button
              onClick={() => buyDamage({ coins: damageCost })}
              disabled={damageCost > coins}
              className="text-left"
            >
              Upgrade damage: {damageCost} coins
            </Button>
          </Col>
          <Col xs={3} className="mb-3">
            x{damageMult}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpgradesTab);
