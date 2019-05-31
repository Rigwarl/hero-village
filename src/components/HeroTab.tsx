import React from 'react';
import { connect } from 'react-redux';
import { Card, ProgressBar, Row, Col } from 'react-bootstrap';

const HeroTab = () => (
  <>
    <Card className="border-0">
      <Card.Body className="lead">Coins: 0 / 100</Card.Body>
    </Card>
    <Card bg="light" border="light">
      <Card.Body>
        <div className="h4 mb-3">Stats</div>
        <ProgressBar now={50} label="exp: 10 / 20" className="mb-2" />

        <Row>
          <Col xs={6} className="mb-2">
            Hero level: 1
          </Col>
          <Col xs={6} className="mb-2">
            100% attack / 100% health
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

export default connect()(HeroTab);
