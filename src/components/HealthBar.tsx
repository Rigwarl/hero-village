import React from 'react';

type TProps = {
  max: number;
  current: number;
  // align: 'left' | 'right';
};

const HealthBar = ({ max, current }: TProps) => (
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
        transform: `scaleX(${current / max})`,
        transformOrigin: 0,
        backgroundColor: 'green',
        transition: 'transform 0.5s',
      }}
    />
  </div>
);

export default HealthBar;
