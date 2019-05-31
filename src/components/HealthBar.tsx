import React from 'react';
import { ProgressBar } from 'react-bootstrap';

type TProps = {
  health: number;
  maxHealth: number;
  flip?: boolean;
};

const HealthBar = ({ maxHealth, health, flip }: TProps) => {
  const scale = health / maxHealth;
  const variant = scale > 0.5 ? 'success' : scale > 0.2 ? 'warning' : 'danger';

  return (
    <ProgressBar
      now={scale * 100}
      variant={variant}
      style={{ transform: `scale(${flip ? '-1' : '1'})` }}
    />
  );
};

export default HealthBar;
