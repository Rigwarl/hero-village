import React from 'react';
import { ProgressBar } from 'react-bootstrap';

type TProps = {
  health: number;
  maxHealth: number;
  // align: 'left' | 'right';
};

const HealthBar = ({ maxHealth, health }: TProps) => (
  <ProgressBar now={(health / maxHealth) * 100} />
);

export default HealthBar;
