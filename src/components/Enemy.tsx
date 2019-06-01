import React from 'react';
import { connect } from 'react-redux';
import { TState } from 'typesafe-actions';

import { selectors } from '../store';

import enemyImg from '../assets/enemy.png';

const mapStateToProps = (state: TState) => ({
  move: selectors.enemy.getMove(state),
});

type TProps = ReturnType<typeof mapStateToProps>;

const Enemy = ({ move }: TProps) => (
  <img
    src={enemyImg}
    alt="enemy"
    style={{
      transform: 'scaleX(-1)',
      opacity: move === 'dead' ? 0 : 1,
      transition: 'opacity 0.7s',
      transitionDelay: '0.5s',
    }}
  />
);

export default connect(mapStateToProps)(Enemy);
