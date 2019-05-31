import React from 'react';
import { connect } from 'react-redux';
import { TState } from 'typesafe-actions';

import HealthBar from './HealthBar';
import { selectors } from '../store';

const mapStateToProps = (state: TState) => ({
  health: selectors.enemy.getHealth(state),
  maxHealth: selectors.enemy.getMaxHealth(state),
});

type TProps = ReturnType<typeof mapStateToProps>;

const EnemyHealthBar = ({ health, maxHealth }: TProps) => (
  <HealthBar health={health} maxHealth={maxHealth} flip />
);

export default connect(mapStateToProps)(EnemyHealthBar);
