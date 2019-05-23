import React from 'react';
import enemyImg from '../assets/enemy.png';

export type TEnemyState = 'idle' | 'dead';

type TProps = {
  health: number;
  state: TEnemyState;
};

const Enemy = ({ health, state }: TProps) => (
  <img
    src={enemyImg}
    alt="enemy"
    style={{
      transform: 'scaleX(-1)',
      opacity: state === 'dead' ? 0 : 1,
      transition: 'opacity 0.7s',
      transitionDelay: '0.5s',
    }}
  />
);

export default Enemy;
