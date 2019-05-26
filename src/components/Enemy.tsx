import React from 'react';
import enemyImg from '../assets/enemy.png';

type TEnemyMove = 'idle' | 'dead';

type TProps = {
  health: number;
  state: TEnemyMove;
};

const Enemy = ({ state }: TProps) => (
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
