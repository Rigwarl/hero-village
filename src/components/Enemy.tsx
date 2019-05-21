import React from 'react';
import enemyImg from '../assets/enemy.png';

type TProps = {
  health: number;
};

const Enemy = ({ health }: TProps) => (
  <img
    src={enemyImg}
    alt="enemy"
    style={{
      transform: 'scaleX(-1)',
      opacity: health > 0 ? 1 : 0,
      transition: 'opacity 0.7s',
      transitionDelay: '0.7s',
    }}
  />
);

export default Enemy;
