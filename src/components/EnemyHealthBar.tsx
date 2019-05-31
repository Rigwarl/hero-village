import React from 'react';
import { connect } from 'react-redux';
import { TState } from 'typesafe-actions';

import HealthBar from './HealthBar';
import { enemy } from '../store/root-selectors';

const mapStateToProps = (state: TState) => ({
  health: enemy.getHealth(state),
  maxHealth: enemy.getMaxHealth(state),
});

type TProps = ReturnType<typeof mapStateToProps>;

const EnemyHealthBar = ({ health, maxHealth }: TProps) => (
  <HealthBar health={health} maxHealth={maxHealth} flip />
);

export default connect(mapStateToProps)(EnemyHealthBar);
