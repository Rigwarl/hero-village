import React from 'react';
import enemyImg from '../assets/enemy.png';

const Enemy = () => (
  <img src={enemyImg} alt="enemy" style={{ transform: 'scaleX(-1)' }} />
);

export default Enemy;
