import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { TState } from 'typesafe-actions';

import { selectors } from '../store';

const mapStateToProps = (state: TState) => ({
  coins: selectors.balance.getCoins(state),
  maxCoins: selectors.balance.getMaxCoins(state),
});

type TProps = ReturnType<typeof mapStateToProps>;

const Balance = ({ coins, maxCoins }: TProps) => (
  <Card className="border-0">
    <Card.Body className="lead">
      Coins: {coins} / {maxCoins}
    </Card.Body>
  </Card>
);

export default connect(mapStateToProps)(Balance);
