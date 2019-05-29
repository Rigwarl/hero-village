import React from 'react';

type TProps = {
  health: number;
  maxHealth: number;
  // align: 'left' | 'right';
};

const HealthBar = ({ maxHealth, health }: TProps) => (
  <div
    style={{
      display: 'inline-block',
      width: '200px',
      margin: '50px',
      marginBottom: 0,
      border: '1px solid black',
    }}
  >
    <div
      style={{
        height: '10px',
        transform: `scaleX(${health / maxHealth})`,
        transformOrigin: 0,
        backgroundColor: 'green',
        transition: 'transform 0.7s',
      }}
    />
  </div>
);

export default HealthBar;
