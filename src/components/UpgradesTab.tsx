import React from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { TState } from 'typesafe-actions';

import { selectors } from '../store';

const mapStateToProps = (state: TState) => ({});

type TProps = ReturnType<typeof mapStateToProps>;

const UpgradesTab = ({  }: TProps) => (
  <>
    <Card bg="light" border="light">
      <Card.Body>
        <div className="h4 mb-3">Upgrades</div>

        <Row className="align-items-center">
          <Col xs={9} className="mb-3">
            <Button disabled block className="text-left">
              Upgrade damage: {678} coins
            </Button>
          </Col>
          <Col xs={3} className="mb-3">
            x2
          </Col>
          <Col xs={9} className="mb-3">
            <Button block className="text-left">
              Upgrade health {5} coins
            </Button>
          </Col>
          <Col xs={3} className="mb-3">
            x1
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </>
);

export default connect(mapStateToProps)(UpgradesTab);
